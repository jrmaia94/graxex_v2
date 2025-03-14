/* eslint-disable @typescript-eslint/no-unused-vars */
import clientes from "./Cliente.json";
import agendamentos from "./Agendamento.json";
import agendamentosPorVeiculos from "./AgendamentosPorVeiculos.json";
import veiculos from "./Veiculo.json";

import { PrismaClient, ServiceByVehicle, Vehicle } from "@prisma/client";
import { handlePaymentMethod } from "./handlePaymentMethod";

const prisma = new PrismaClient();

async function main() {
  try {
    clientes.forEach(async (cliente) => {
      const customer = await prisma.customer.create({
        data: {
          name: cliente.name,
          address: cliente.address,
          period: cliente.ciclo,
          CPFCNPJ: cliente.CPFCNPJ,
          phone: cliente.phone,
        },
        select: {
          id: true,
        },
      });
      const oldCustomerId = cliente.id;
      const newCustomerId = customer.id;

      const agendamentosFiltrados = agendamentos.filter(
        (e) => e.clienteId === oldCustomerId,
      );

      agendamentosFiltrados.forEach(async (agendamento) => {
        const service = await prisma.service.create({
          data: {
            customerId: newCustomerId,
            date: agendamento.serviceCompleted,
            isPaid: agendamento.paid,
            paymentMethod: handlePaymentMethod(
              agendamento.paymentMethod || undefined,
            ),
            price: agendamento.price,
          },
          select: {
            id: true,
          },
        });

        const oldServiceId = agendamento.id;
        const newServiceId = service.id;
        const serviceByVehicle: ServiceByVehicle[] = [];

        agendamento.pricePerVeiculo.forEach(async (item) => {
          const veiculo = veiculos.find((v) => v.id === item.veiculoId);
          if (veiculo) {
            const vehicle = await prisma.vehicle.create({
              data: {
                customerId: newCustomerId,
                licensePlate: veiculo.placa,
                model: veiculo.modelo,
                make: veiculo.fabricante,
                color: veiculo.cor,
                fleet: veiculo.frota,
                numberOfAxles: veiculo.numEixos,
                driverName: veiculo.nomeMotorista,
                driverPhone: veiculo.phoneMotorista,
                notes: veiculo.observacao,
                period: veiculo.ciclo,
              },
              select: {
                id: true,
              },
            });

            serviceByVehicle.push({
              serviceId: newServiceId,
              vehicleId: vehicle.id,
              price: item.price,
              notes: item.observacao || "",
            });
          }
        });
      });
    });

    console.log("Seed concluído com sucesso!");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

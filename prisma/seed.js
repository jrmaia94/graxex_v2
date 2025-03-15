import clientesJson from "./seeds/Cliente.json" with { type: "json" };
import agendamentosJson from "./seeds/Agendamento.json" with { type: "json" };
import veiculosJson from "./seeds/Veiculo.json" with { type: "json" };

import { PaymentMethod, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handlePaymentMethod = (value) => {
  if (!value) return undefined;

  if (value.toUpperCase() === "PIX") return PaymentMethod.PIX;

  if (value.toUpperCase() === "BOLETO") return PaymentMethod.BOLETO;

  if (value.toUpperCase() === "CARTÃO") return PaymentMethod.CARTAO;

  if (value.toUpperCase() === "DINHEIRO") return PaymentMethod.DINHEIRO;
};

async function main() {
  try {
    const clientes = clientesJson;
    const agendamentos = agendamentosJson;
    const veiculos = veiculosJson;

    for (const cliente of clientes) {
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

      for (const agendamento of agendamentosFiltrados) {
        const service = await prisma.service.create({
          data: {
            customerId: newCustomerId,
            date: new Date(agendamento.serviceCompleted),
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

        const newServiceId = service.id;
        const serviceByVehicle = [];

        for (const item of agendamento.pricePerVeiculo) {
          const veiculo = veiculos.find((v) => v.id === item.veiculoId);
          if (veiculo) {
            let vehicle = await prisma.vehicle.findUnique({
              where: {
                licensePlate: veiculo.placa,
              },
            });

            if (!vehicle) {
              vehicle = await prisma.vehicle.create({
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
            }

            serviceByVehicle.push({
              serviceId: newServiceId,
              vehicleId: vehicle.id,
              price: item.price,
              notes: item.observacao || "",
            });
          }
        }

        await prisma.serviceByVehicle.createMany({
          data: serviceByVehicle,
        });
      }
    }

    console.log("Seed concluído com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();

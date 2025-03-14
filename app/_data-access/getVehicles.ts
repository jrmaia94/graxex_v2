"use server";
import { unstable_cache } from "next/cache";
import { db } from "../_lib/prisma";

//Função para buscar todas as marcas e modelos de veículos cadastrados
export const getModelAndMakeOfVehicles = async () => {
  const models: string[] = [];
  const makes: string[] = [];
  await db.vehicle
    .findMany({
      select: {
        model: true,
        make: true,
      },
    })
    .then((data) => {
      data.forEach((vehicle) => {
        if (!models.includes(vehicle.model.toUpperCase())) {
          //Adicionar ao array apenas os modelos que ainda não foram adicionados
          models.push(vehicle.model.toUpperCase());
        }
        if (vehicle.make && !makes.includes(vehicle.make.toUpperCase())) {
          //Adicionar ao array apenas as marcas que ainda não foram adicionadas
          makes.push(vehicle.make.toUpperCase());
        }
      });
    });

  return { models, makes };
};

export const cachedGetModelAndMakeOfVehicles = unstable_cache(
  getModelAndMakeOfVehicles,
  ["get-model-and-make-of-vehicles"],
  { revalidate: 20 },
);

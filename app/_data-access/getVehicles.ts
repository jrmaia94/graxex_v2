"use server";
import { unstable_cache } from "next/cache";
import { db } from "../_lib/prisma";

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
          models.push(vehicle.model.toUpperCase());
        }
        if (vehicle.make && !makes.includes(vehicle.make.toUpperCase())) {
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

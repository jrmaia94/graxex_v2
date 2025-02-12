import { Customer, Vehicle } from "@prisma/client";

export type VehicleWithCustomer = {
  Customer: Customer;
} & Vehicle;

export type VehicleCardType = Pick<
  VehicleWithCustomer,
  | "color"
  | "Customer"
  | "customerId"
  | "fleet"
  | "id"
  | "licensePlate"
  | "make"
  | "model"
  | "notes"
  | "numberOfAxles"
>;

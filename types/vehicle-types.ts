import { Customer, Vehicle } from "@prisma/client";

export type VehicleWithCustomerType = {
  Customer: Customer;
} & Vehicle;

export type VehicleWithNameOfCustomerType = {
  Customer: Customer;
  name: string;
} & Vehicle;

export type VehicleCardType = Pick<
  VehicleWithCustomerType,
  | "id"
  | "Customer"
  | "color"
  | "customerId"
  | "fleet"
  | "licensePlate"
  | "make"
  | "model"
  | "notes"
  | "numberOfAxles"
>;

export type VehicleFormType = VehicleCardType;

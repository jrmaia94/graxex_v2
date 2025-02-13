import { Customer, Service, ServiceByVehicle, Vehicle } from "@prisma/client";

export type ServiceFormType = Pick<
  Service,
  "id" | "date" | "price" | "customerId"
> & {
  Customer: Customer;
  ServiceByVehicle: ServiceByVehicle[];
};

export type ServiceTableType = Pick<
  Service,
  "id" | "date" | "price" | "customerId"
> & {
  name: string;
  Customer: Customer;
  Vehicles: Vehicle[];
};

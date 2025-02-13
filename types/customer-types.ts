import { Customer } from "@prisma/client";
export type CustomerFormType = Pick<
  Customer,
  "id" | "name" | "address" | "phone" | "CPFCNPJ"
>;

export type CustomerPopoverType = Pick<Customer, "id" | "name">;

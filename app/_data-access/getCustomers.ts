import "server-only";
import { Customer } from "@prisma/client";
import { db } from "../_lib/prisma";
import { unstable_cache } from "next/cache";

export const getCustomers = async (): Promise<Customer[]> => {
  return await db.customer.findMany({});
};

export const cachedGetCustomers = unstable_cache(
  getCustomers,
  ["get-customers"],
  { revalidate: 20 },
);

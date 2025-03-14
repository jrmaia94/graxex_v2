"use server";
import { getCustomers } from "@/app/_data-access/getCustomers";

export async function GET() {
  const data = await getCustomers();
  return Response.json([...data]);
}

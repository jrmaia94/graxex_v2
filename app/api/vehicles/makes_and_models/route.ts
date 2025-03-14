"use server";
import { getModelAndMakeOfVehicles } from "@/app/_data-access/getVehicles";

export async function GET() {
  const data = await getModelAndMakeOfVehicles();
  return Response.json({ ...data });
}

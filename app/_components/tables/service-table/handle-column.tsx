"use client";
import { DataTable } from "../data-table";
import { serviceColumns } from "./column";
import { ServiceTableType } from "@/types/service-types";

const HandleColumn = ({ services }: { services: ServiceTableType[] }) => {
  return <DataTable columns={serviceColumns} data={services} />;
};

export default HandleColumn;

"use client";
import { useEffect, useState } from "react";
import { DataTable } from "../data-table";
import { vechicleFullColumns, vehicleColumns } from "./columns";
import { VehicleWithNameOfCustomerType } from "@/types/vehicle-types";

const HandleColumn = ({
  vehicles,
}: {
  vehicles: VehicleWithNameOfCustomerType[];
}) => {
  const [viewport, setViewport] = useState<number>(770);
  useEffect(() => {
    setViewport(window.visualViewport?.width ?? 770);
  }, []);
  return (
    <DataTable
      columns={
        viewport && viewport > 768 ? vechicleFullColumns : vehicleColumns
      }
      data={vehicles}
    />
  );
};

export default HandleColumn;

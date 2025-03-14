"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../ui/button";
import { ArrowUpDown } from "lucide-react";
import VehicleCard from "../../cards/vehicle-card";
import { VehicleWithNameOfCustomerType } from "@/types/vehicle-types";
import HandleVehicle from "../../handle-vehicle";

type ColumnDefProps = Pick<
  VehicleWithNameOfCustomerType,
  | "id"
  | "make"
  | "model"
  | "licensePlate"
  | "color"
  | "customerId"
  | "Customer"
  | "fleet"
  | "notes"
  | "numberOfAxles"
  | "name"
>;

export const vehicleColumns: ColumnDef<ColumnDefProps>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown />
        </Button>
      </div>
    ),
    cell: ({ row }) => <p className="text-center">{row.original.id}</p>,
  },
  {
    accessorKey: "licensePlate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="p-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Placa
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <HandleVehicle vehicle={row.original}>
          <Button variant="ghost" className="m-0 p-0 font-normal">
            {row.original.licensePlate}
          </Button>
        </HandleVehicle>
      );
    },
  },
  {
    accessorKey: "model",
    header: () => {
      return (
        <Button className="p-0" variant="ghost">
          Veiculo
        </Button>
      );
    },
    cell: ({ row }) => <VehicleCard vehicle={row.original} />,
  },
];

export const vechicleFullColumns: ColumnDef<ColumnDefProps>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <div className="flex justify-center">
        <Button
          className="px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown />
        </Button>
      </div>
    ),
    cell: ({ row }) => <p className="px-2 text-center">{row.original.id}</p>,
  },
  {
    accessorKey: "licensePlate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="px-2"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Placa
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <HandleVehicle vehicle={row.original}>
          <Button variant="ghost" className="m-0 p-0 px-2 font-normal">
            {row.original.licensePlate}
          </Button>
        </HandleVehicle>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cliente
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="m-0 p-0 px-2 font-normal">{row.original.name}</p>;
    },
  },
  {
    accessorKey: "model",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modelo
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="m-0 p-0 px-2 font-normal">{row.original.model}</p>;
    },
  },
  {
    accessorKey: "make",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fabricante
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="m-0 p-0 px-2 font-normal">{row.original.make}</p>;
    },
  },
  {
    accessorKey: "color",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cor
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="m-0 p-0 px-2 font-normal">{row.original.color}</p>;
    },
  },
  {
    accessorKey: "fleet",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Frota
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="m-0 p-0 px-2 text-center font-normal">
          {row.original.fleet}
        </p>
      );
    },
  },
  {
    accessorKey: "numberOfAxles",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nº eixos
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="m-0 p-0 px-2 text-center font-normal">
          {row.original.numberOfAxles}
        </p>
      );
    },
  },
  {
    accessorKey: "notes",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 px-2"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Observações
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className="m-0 p-0 px-2 font-normal">{row.original.notes}</p>;
    },
  },
];

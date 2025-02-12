"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../ui/button";
import { ArrowUpDown } from "lucide-react";
import VehicleCard from "../../cards/vehicle-card";
import { VehicleWithCustomer } from "@/types/vehicle-types";

export const vehicleColumns: ColumnDef<
  Pick<
    VehicleWithCustomer,
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
  >
>[] = [
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
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.licensePlate}
        </Button>
      );
    },
  },
  {
    accessorKey: "other",
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

export const vechicleFullColumns: ColumnDef<
  Pick<
    VehicleWithCustomer,
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
  >
>[] = [
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
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.licensePlate}
        </Button>
      );
    },
  },
  {
    accessorKey: "Customer",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cliente
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.Customer.name}
        </Button>
      );
    },
  },
  {
    accessorKey: "model",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Modelo
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.model}
        </Button>
      );
    },
  },
  {
    accessorKey: "make",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fabricante
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.make}
        </Button>
      );
    },
  },
  {
    accessorKey: "color",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cor
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.color}
        </Button>
      );
    },
  },
  {
    accessorKey: "fleet",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
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
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.fleet}
        </Button>
      );
    },
  },
  {
    accessorKey: "numberOfAxles",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Número de eixos
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.numberOfAxles}
        </Button>
      );
    },
  },
  {
    accessorKey: "notes",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Observações
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <Button variant="ghost" className="m-0 p-0 font-normal">
          {row.original.notes}
        </Button>
      );
    },
  },
];

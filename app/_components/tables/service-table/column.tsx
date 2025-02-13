"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../ui/button";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";
import { ServiceTableType } from "@/types/service-types";

export const serviceColumns: ColumnDef<
  Pick<
    ServiceTableType,
    "id" | "date" | "price" | "customerId" | "Customer" | "Vehicles" | "name"
  >
>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <p className="text-center">{row.original.id}</p>,
  },
  {
    accessorKey: "name",
    maxSize: 20,
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Cliente
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <p className="text-left">{row.original.Customer.name}</p>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="justify-start p-0">
          <span className="truncate p-0">
            {format(row.original.date, "dd/MM/yyyy")}
          </span>
        </p>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valor
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="p-0 text-right">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(row.original.price)}
        </p>
      );
    },
  },
];

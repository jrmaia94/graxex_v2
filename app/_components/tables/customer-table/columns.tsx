"use client";

import { Customer } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../ui/button";
import { ArrowUpDown } from "lucide-react";
import HandleCustomer from "../../handle-customer";
import { CustomerFormType } from "@/types/customer-types";

export const customerColumns: ColumnDef<
  Pick<Customer, "id" | "name" | "phone" | "address" | "CPFCNPJ">
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
    header: ({ column }) => {
      return (
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const customer: CustomerFormType = {
        id: row.original.id,
        name: row.original.name,
        phone: row.original.phone,
        address: row.original.address,
        CPFCNPJ: row.original.CPFCNPJ,
      };
      return (
        <HandleCustomer customer={customer}>
          <Button variant="ghost" className="justify-start p-0">
            <span className="truncate p-0">{row.original.name}</span>
          </Button>
        </HandleCustomer>
      );
    },
  },
];

"use client";

import { Customer } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowUpDown } from "lucide-react";

export const customerColumns: ColumnDef<
  Pick<Customer, "id" | "name" | "phone">
>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <Link href={"/customers"}>{row.original.name}</Link>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
];

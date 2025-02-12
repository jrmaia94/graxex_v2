import HandleCustomer from "@/app/_components/handle-customer";

import { DataTable } from "@/app/_components/tables/data-table";
import { vechicleFullColumns } from "@/app/_components/tables/vehicle-table/columns";
import { Button } from "@/app/_components/ui/button";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { db } from "@/app/_lib/prisma";
import { PlusIcon } from "lucide-react";

const Vehicles = async () => {
  const vehicles = await db.vehicle.findMany({
    include: {
      Customer: true,
    },
  });

  return (
    <div className="flex h-full w-full flex-col">
      {/* TITULO E BOTÃO */}
      <div className="absolute right-4 top-5">
        <HandleCustomer>
          <Button className="rounded-2xl">
            Novo cliente
            <PlusIcon />
          </Button>
        </HandleCustomer>
      </div>

      <ScrollArea className={`h-[50rem] max-w-[100dvw]`}>
        <DataTable columns={vechicleFullColumns} data={vehicles} />
      </ScrollArea>
    </div>
  );
};

export default Vehicles;

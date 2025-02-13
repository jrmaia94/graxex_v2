import HandleVehicle from "@/app/_components/handle-vehicle";
import HandleColumn from "@/app/_components/tables/vehicle-table/handle-column";
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
        <HandleVehicle>
          <Button className="rounded-2xl">
            Novo veículo
            <PlusIcon />
          </Button>
        </HandleVehicle>
      </div>

      <ScrollArea className={`h-[50rem] max-w-[100dvw]`}>
        <HandleColumn
          vehicles={vehicles.map((vehicle) => ({
            ...vehicle,
            name: vehicle.Customer.name,
          }))}
        />
      </ScrollArea>
    </div>
  );
};

export default Vehicles;

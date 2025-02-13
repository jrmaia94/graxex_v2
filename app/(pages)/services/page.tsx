import HandleService from "@/app/_components/handle-service";
import HandleColumn from "@/app/_components/tables/service-table/handle-column";
import { Button } from "@/app/_components/ui/button";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { db } from "@/app/_lib/prisma";
import { PlusIcon } from "lucide-react";

const Services = async () => {
  const services = await db.service.findMany({
    include: {
      Customer: true,
      ServiceByVehicle: {
        include: {
          Vehicle: true,
          Service: true,
        },
      },
    },
  });

  return (
    <div className="flex h-full w-full flex-col">
      {/* TITULO E BOTÃO */}
      <div className="absolute right-4 top-5">
        <HandleService>
          <Button className="rounded-2xl">
            Novo serviço
            <PlusIcon />
          </Button>
        </HandleService>
      </div>

      <ScrollArea className={`h-[50rem] max-w-[100dvw]`}>
        <HandleColumn
          services={services.map((service) => ({
            ...service,
            name: service.Customer.name,
            Vehicles: service.ServiceByVehicle.map((e) => e.Vehicle),
          }))}
        />
      </ScrollArea>
    </div>
  );
};

export default Services;

import HandleCustomer from "@/app/_components/handle-customer";
import { customerColumns } from "@/app/_components/tables/customer-table/columns";
import { DataTable } from "@/app/_components/tables/data-table";
import { Button } from "@/app/_components/ui/button";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { cachedGetCustomers } from "@/app/_data-access/getCustomers";
import { PlusIcon } from "lucide-react";

const Customer = async () => {
  const customers = await cachedGetCustomers();

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

      <ScrollArea className={`h-[50rem]`}>
        <DataTable columns={customerColumns} data={customers} />
      </ScrollArea>
    </div>
  );
};

export default Customer;

import { VehicleFormType } from "@/types/vehicle-types";
import VehicleForm from "./forms/vehicle-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cachedGetCustomers } from "../_data-access/getCustomers";
import { cachedGetModelAndMakeOfVehicles } from "../_data-access/getVehicles";

const HandleVehicle = async ({
  children,
  vehicle,
}: {
  children: React.ReactNode;
  vehicle?: VehicleFormType;
}) => {
  const customers = await cachedGetCustomers();
  const makeAndModels = await cachedGetModelAndMakeOfVehicles();
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo veículo</DialogTitle>
          <DialogDescription>
            Preencha os dados e clique em salvar.
          </DialogDescription>
        </DialogHeader>
        <VehicleForm
          customers={customers}
          makeAndModels={makeAndModels}
          vehicle={vehicle}
        />
      </DialogContent>
    </Dialog>
  );
};

export default HandleVehicle;

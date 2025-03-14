"use client";
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

const HandleVehicle = ({
  children,
  vehicle,
}: {
  children: React.ReactNode;
  vehicle?: VehicleFormType;
}) => {
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
        <VehicleForm vehicle={vehicle} />
      </DialogContent>
    </Dialog>
  );
};

export default HandleVehicle;

import { ServiceFormType } from "@/types/service-types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ServiceForm from "./forms/service-form";

const HandleService = ({
  children,
  service,
}: {
  children: React.ReactNode;
  service?: ServiceFormType;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo serviço</DialogTitle>
          <DialogDescription>
            Preencha os dados e clique em salvar.
          </DialogDescription>
        </DialogHeader>
        <ServiceForm service={service} />
      </DialogContent>
    </Dialog>
  );
};

export default HandleService;

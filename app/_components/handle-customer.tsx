import CustomerForm from "./forms/customer-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { CustomerFormType } from "@/types/customer-types";

const HandleCustomer = ({
  children,
  customer,
}: {
  children: React.ReactNode;
  customer?: CustomerFormType;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo cliente</DialogTitle>
          <DialogDescription>
            Preencha os dados e clique em salvar.
          </DialogDescription>
        </DialogHeader>
        <CustomerForm customer={customer} />
      </DialogContent>
    </Dialog>
  );
};

export default HandleCustomer;

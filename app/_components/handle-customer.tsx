import CustomerForm from "./forms/customer-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const HandleCustomer = ({ children }: { children: React.ReactNode }) => {
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
        <CustomerForm />
      </DialogContent>
    </Dialog>
  );
};

export default HandleCustomer;

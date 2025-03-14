"use client";

import { VehicleFormType } from "@/types/vehicle-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CustomerPopoverType } from "@/types/customer-types";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/app/_lib/utils";
import { Customer } from "@prisma/client";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import Loader from "../loader";

const formSchema = z.object({
  id: z.number(),
  model: z.string(),
  make: z.string().optional().nullable(),
  licensePlate: z.string(),
  color: z.string().optional().nullable(),
  fleet: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  numberOfAxels: z.number(),
  customerId: z.number(),
});
const VehicleForm = ({ vehicle }: { vehicle?: VehicleFormType }) => {
  const [isPending, startTransition] = useTransition();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [makeAndModels, setMakeAndModels] = useState<{
    makes: string[];
    models: string[];
  }>({
    makes: [],
    models: [],
  });

  useEffect(() => {
    startTransition(() => {
      fetch("/api/customers")
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            res.json().then((result) => {
              setCustomers(result);
            });
          } else {
            toast("Erro na solicitação de dados!", {
              description: "Erro ao obter os dados do(s) cliente(s)!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast("Erro na solicitação de dados!", {
            description: "Erro ao obter os dados do(s) cliente(s)!",
          });
        });

      fetch("/api/vehicles/makes_and_models")
        .then((res) => {
          res.json().then((result) => {
            setMakeAndModels(result);
          });
        })
        .catch((err) => {
          console.log(err);
          toast("Erro na solicitação de dados!", {
            description: "Erro ao obter os dados do(s) cliente(s)!",
          });
        });
    });
  }, []);

  const customersList: CustomerPopoverType[] = customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
  }));
  const makeList: string[] = makeAndModels.makes;
  const modelList: string[] = makeAndModels.models;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: vehicle ?? {
      id: 0,
      make: "",
      model: "",
      color: "",
      customerId: 0,
      fleet: "",
      licensePlate: "",
      notes: "",
      numberOfAxels: 3,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      {isPending && <Loader />}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* ID INPUT */}
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Id</FormLabel>
              <FormControl>
                <Input readOnly className="text-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* CLIENTE INPUT */}
        <FormField
          control={form.control}
          name="customerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cliente</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className="flex w-full justify-between border"
                      variant="ghost"
                    >
                      {field.value
                        ? customersList.find(
                            (customer) => customer.id === field.value,
                          )?.name
                        : "Selecione um cliente"}
                      <ChevronsUpDown />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Buscar cliente..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>Nenhum cliente encontrado</CommandEmpty>
                      <CommandGroup>
                        {customersList.map((customer) => (
                          <CommandItem
                            key={customer.id}
                            value={customer.name}
                            onSelect={() =>
                              form.setValue("customerId", customer.id)
                            }
                          >
                            {customer.name}
                            <Check
                              className={cn(
                                "ml-auto",
                                customer.id === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* MODELO INPUT */}
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input
                    list="models"
                    className="text-sm"
                    {...field}
                    value={field.value ? field.value : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <datalist id="models">
          {modelList.map((model) => (
            <option key={model} value={model} />
          ))}
        </datalist>

        {/* FABRICANTE INPUT */}
        <FormField
          control={form.control}
          name="make"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fabricante</FormLabel>
              <FormControl>
                <Input
                  list="makes"
                  className="text-sm"
                  {...field}
                  value={field.value ? field.value : ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <datalist id="makes">
          {makeList.map((make) => (
            <option key={make} value={make} />
          ))}
        </datalist>
        <div className="flex w-full justify-between gap-2">
          {/* PLACA INPUT */}
          <FormField
            control={form.control}
            name="licensePlate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Placa</FormLabel>
                <FormControl>
                  <Input className="text-sm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* COR INPUT */}
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cor</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value ? field.value : ""}
                    className="text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full justify-between gap-2">
          {/* FROTA INPUT */}
          <FormField
            control={form.control}
            name="fleet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frota</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value ? field.value : ""}
                    className="text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* EIXOS INPUT */}
          <FormField
            control={form.control}
            name="numberOfAxels"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nº eixos</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value ? field.value : ""}
                    className="text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* OBS. INPUT */}
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Obs.</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value ? field.value : ""}
                  className="text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
};

export default VehicleForm;

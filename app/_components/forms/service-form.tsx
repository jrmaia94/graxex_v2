"use client";
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
import { ServiceFormType } from "@/types/service-types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/app/_lib/utils";
import { Calendar } from "../ui/calendar";

const formSchema = z.object({
  id: z.number(),
  date: z.date(),
  price: z.number(),
  customerId: z.number(),
});
const ServiceForm = ({ service }: { service?: ServiceFormType }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: service ?? {
      id: 0,
      date: new Date(Date.now()),
      price: 0,
      customerId: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* ID INPUT */}
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Id</FormLabel>
              <FormControl>
                <Input className="text-sm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* DATE INPUT */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? format(field.value, "PPP")
                        : "Selecione uma data"}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* PRICE INPUT */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => {
            console.log(field);
            return (
              <FormItem>
                <FormLabel>Valor total</FormLabel>
                <FormControl>
                  <Input
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
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
};

export default ServiceForm;

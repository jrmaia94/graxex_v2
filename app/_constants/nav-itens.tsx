import {
  HouseIcon,
  NotebookTabsIcon,
  TruckIcon,
  UserRoundIcon,
} from "lucide-react";
import { cn } from "../_lib/utils";

export const navItems = [
  {
    title: "Home",
    url: "/home",
    icon: (open: boolean) => {
      return (
        <HouseIcon
          className={cn(open && "!h-[1.6rem] !w-[1.6rem] !stroke-[1.5]")}
        />
      );
    },
  },
  {
    title: "Clientes",
    url: "/customers",
    icon: (open: boolean) => {
      return (
        <UserRoundIcon
          className={cn(open && "!h-[1.6rem] !w-[1.6rem] !stroke-[1.5]")}
        />
      );
    },
  },
  {
    title: "Veículos",
    url: "/vehicles",
    icon: (open: boolean) => {
      return (
        <TruckIcon
          className={cn(open && "!h-[1.6rem] !w-[1.6rem] !stroke-[1.5]")}
        />
      );
    },
  },
  {
    title: "Serviços",
    url: "/services",
    icon: (open: boolean) => {
      return (
        <NotebookTabsIcon
          className={cn(open && "!h-[1.6rem] !w-[1.6rem] !stroke-[1.5]")}
        />
      );
    },
  },
];

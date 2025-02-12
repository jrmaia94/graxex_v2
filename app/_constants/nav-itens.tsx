import {
  HouseIcon,
  NotebookTabsIcon,
  TruckIcon,
  UserRoundIcon,
} from "lucide-react";

export const navItems = [
  {
    title: "Home",
    url: "/home",
    icon: <HouseIcon />,
  },
  {
    title: "Clientes",
    url: "/customers",
    icon: <UserRoundIcon />,
  },
  {
    title: "Veículos",
    url: "/vehicles",
    icon: <TruckIcon />,
  },
  {
    title: "Serviços",
    url: "/services",
    icon: <NotebookTabsIcon />,
  },
];

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { navItems } from "../_constants/nav-itens";

export function AppSidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex h-[85px] items-center">
        {isOpen ? (
          <Image
            alt="Logo da empresa"
            src="/logo-horizontal.png"
            width={140}
            height={140}
          />
        ) : (
          <Image
            alt="Logo da empresa"
            src="/logo-vertical.png"
            width={60}
            height={60}
          />
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {navItems.map((item) => (
            <SidebarMenuItem
              className={`flex ${isOpen && "p-2"} py-2`}
              key={item.title}
            >
              <SidebarMenuButton asChild>
                <Link className="flex gap-4 text-xl" href={item.url}>
                  {item.icon}
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center pb-5">
        <UserButton showName={isOpen} />
      </SidebarFooter>
    </Sidebar>
  );
}

"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { navItems } from "../_constants/nav-itens";

export function AppSidebar() {
  const { open, isMobile, toggleSidebar } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex h-[85px] items-center">
        {open ? (
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
              onClick={() => isMobile && toggleSidebar()}
              className={`flex py-2`}
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
        <UserButton showName={open} />
      </SidebarFooter>
    </Sidebar>
  );
}

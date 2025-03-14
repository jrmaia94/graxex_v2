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
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "../_lib/utils";

export function AppSidebar() {
  const path = usePathname();
  const { open, isMobile, toggleSidebar } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex h-[85px] items-center justify-center">
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
        <SidebarGroup
          className={cn("flex flex-col gap-4", open && "mt-5 px-7")}
        >
          {navItems.map((item) => (
            <SidebarMenuItem
              onClick={() => isMobile && toggleSidebar()}
              className={`flex`}
              key={item.title}
            >
              <SidebarMenuButton
                className={cn("rounded-full", open && "px-8 py-6")}
                asChild
              >
                <Button
                  asChild
                  variant={path === item.url ? "default" : "ghost"}
                  className="justify-start transition hover:bg-muted-foreground hover:text-primary-foreground"
                >
                  <Link
                    className="flex gap-4 text-xl font-normal"
                    href={item.url}
                  >
                    {item.icon(open)}
                    {item.title}
                  </Link>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center pb-10">
        <UserButton showName={open} />
      </SidebarFooter>
    </Sidebar>
  );
}

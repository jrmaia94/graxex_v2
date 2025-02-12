"use client";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import { navItems } from "../_constants/nav-itens";
import { Separator } from "./ui/separator";

const SidebarProviderComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = usePathname();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex h-full w-full flex-col px-4 py-6">
        <div className="flex gap-2 pb-6">
          <SidebarTrigger />
          <Separator orientation="vertical" />
          <h1 className="text-2xl font-bold">
            {navItems.find((item) => item.url === path)?.title}
          </h1>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default SidebarProviderComponent;

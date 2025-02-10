import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SidebarProviderComponent from "../_components/sidebar-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex h-full w-full flex-col">
      <SidebarProviderComponent>{children}</SidebarProviderComponent>
    </div>
  );
}

import React, { ReactNode } from "react";
import { AppSidebar } from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full">      
        <Navbar/>
        {children}     
      </main>
    </SidebarProvider>
  );
};

export default Layout;




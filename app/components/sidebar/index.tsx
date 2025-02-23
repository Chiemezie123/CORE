'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { sidebarModuleMenus, dashboardModuleMenus, LogoutModuleMenus } from "@/constant/data";
import Image from "next/image";
import Logo from "@/assets/image/LAPO.svg";
import FooterLogo from "@/assets/image/cardinfra.svg";
import { usePathname } from "next/navigation"; 
import { Typography } from "@/components/typography";

export function AppSidebar() {
  const pathname = usePathname(); 

  return (
    <Sidebar className="border-r border-[#DEDEDF] bg-white">
      {/* Sidebar Header */}
      <SidebarHeader>
        <div>
          <Image src={Logo} alt="logo" width={138.315} height={45} />
        </div>
        <SidebarMenu>
          {dashboardModuleMenus.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a
                  href={item.path}
                  className={`flex items-center gap-2 p-2 rounded-md transition-all duration-300 ${
                    pathname === item.path
                      ? "text-[#014DAF] font-medium bg-[#F6F6F6] border border-[#E2E2E2]" 
                      : "text-[#00000080] font-normal"
                  }`}
                  style={{
                    fontFamily: "Satoshi",
                    fontSize: "12px",
                    lineHeight: "18px",
                    borderRadius: pathname === item.path ? "8px" : "0", 
                  }}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarModuleMenus.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.path}
                      className={`flex items-center gap-2 p-2 rounded-md transition-all duration-300  ${
                        pathname === item.path
                          ? "text-[#014DAF] font-medium bg-[#F6F6F6] border border-[#E2E2E2]" 
                          : "text-[#00000080] font-normal" 
                      }`}
                      style={{
                        fontFamily: "Satoshi",
                        fontSize: "12px",
                        lineHeight: "18px",
                        borderRadius: pathname === item.path ? "8px" : "0", // Add border radius for active state
                      }}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-6">
            <SidebarMenu>
              {LogoutModuleMenus.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.path}
                      className={`flex items-center gap-2 p-2 rounded-md transition-all duration-300  ${
                        pathname === item.path
                          ? "text-[#014DAF] font-medium bg-[#F6F6F6] border border-[#E2E2E2]" 
                          : "text-[#00000080] font-normal" 
                      }`}
                      style={{
                        fontFamily: "Satoshi",
                        fontSize: "12px",
                        lineHeight: "18px",
                        borderRadius: pathname === item.path ? "8px" : "0", 
                      }}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem className="flex flex-col gap-2">
                <div>
                  <Typography variant="c-s" color="gray-500" font="Satoshi" fontWeight="medium">POWERED BY</Typography>
                </div>
                <div>
                  <Image src={FooterLogo} alt="footerlogo" width={93.33} height={41.41} />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
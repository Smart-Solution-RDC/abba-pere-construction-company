"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Building2, Package, ShoppingCart, Users, Warehouse, FileText, Settings, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: BarChart3,
  },
  {
    title: "Commandes",
    url: "/admin/commandes",
    icon: ShoppingCart,
  },
  {
    title: "Produits",
    url: "/admin/produits",
    icon: Package,
  },
  {
    title: "Stock",
    url: "/admin/stock",
    icon: Warehouse,
  },
  {
    title: "Clients",
    url: "/admin/clients",
    icon: Users,
  },
  {
    title: "Utilisateurs",
    url: "/admin/utilisateurs",
    icon: Settings,
  },
  {
    title: "Rapports",
    url: "/admin/rapports",
    icon: FileText,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/admin/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#155E75] text-white">
                  <Building2 className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">CimentPro</span>
                  <span className="text-xs">Administration</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between p-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm">
                <LogOut className="size-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}


import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Box, 
  Activity, 
  Server, 
  CreditCard, 
  Globe, 
  Megaphone, 
  FileText,
  UserRound, 
  Settings,
  Book,
  Network
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Box, label: 'Products/Services', path: '/products' },
  { icon: Activity, label: 'Monitoring', path: '/monitoring' },
  { icon: Server, label: 'Servers', path: '/servers' },
  { icon: CreditCard, label: 'Finance', path: '/finance' },
  { icon: Network, label: 'Network Tools', path: '/tools' },
  { icon: Megaphone, label: 'Announcements', path: '/announcements' },
  { icon: Book, label: 'Documentation', path: '/docs' },
  { icon: UserRound, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

const Sidebar = () => {
  return (
    <SidebarComponent className="border-r border-border/50">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-vpn-cyan" />
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vpn-cyan to-vpn-blue">VPN Admin</h1>
        </div>
        <SidebarTrigger />
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground">
            MAIN NAVIGATION
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                        isActive ? "bg-sidebar-accent text-primary" : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                      end={item.path === '/'}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mt-auto p-4">
          <div className="rounded-md bg-sidebar-accent p-4 border border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Account Status</p>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-vpn-green animate-pulse"></span>
              <span className="text-sm font-medium">Premium</span>
            </div>
          </div>
        </div>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;


import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import WorldMap from "@/components/dashboard/WorldMap";
import BandwidthChart from "@/components/dashboard/BandwidthChart";
import ServerStatusTable from "@/components/dashboard/ServerStatusTable";
import AccountInfoCard from "@/components/dashboard/AccountInfoCard";
import InvoiceList from "@/components/dashboard/InvoiceList";
import NetworkToolsCard from "@/components/dashboard/NetworkToolsCard";
import AnnouncementCard from "@/components/dashboard/AnnouncementCard";
import { Globe, Activity, Server, CreditCard, Network } from "lucide-react";

const Index = () => {
  // Sample data, in a real app this would come from an API
  const bandwidthData = [
    { name: 'Mon', upload: 1.2, download: 3.5 },
    { name: 'Tue', upload: 2.3, download: 4.2 },
    { name: 'Wed', upload: 3.0, download: 5.0 },
    { name: 'Thu', upload: 2.5, download: 4.8 },
    { name: 'Fri', upload: 3.8, download: 6.2 },
    { name: 'Sat', upload: 2.8, download: 5.3 },
    { name: 'Sun', upload: 1.5, download: 3.8 },
  ];

  const servers = [
    {
      id: '1',
      name: 'sg1.vpnadmin.com',
      location: 'Singapore',
      status: 'operational' as const,
      uptime: '99.98%',
      load: 65,
    },
    {
      id: '2',
      name: 'us-east.vpnadmin.com',
      location: 'US East',
      status: 'operational' as const,
      uptime: '99.95%',
      load: 78,
    },
    {
      id: '3',
      name: 'eu-west.vpnadmin.com',
      location: 'EU West',
      status: 'degraded' as const,
      uptime: '98.53%',
      load: 91,
    },
    {
      id: '4',
      name: 'jp1.vpnadmin.com',
      location: 'Japan',
      status: 'down' as const,
      uptime: '89.21%',
      load: 0,
    },
  ];

  const accountInfo = {
    username: 'admin',
    email: 'admin@vpnadmin.com',
    plan: 'Business Pro',
    status: 'Active',
    validUntil: 'Jan 15, 2026',
    permissions: ['Admin', 'Billing', 'Server Management', 'User Management'],
  };

  const invoices = [
    {
      id: 'INV-2024-001',
      date: 'May 01, 2024',
      amount: '$199.99',
      status: 'paid' as const,
    },
    {
      id: 'INV-2024-002',
      date: 'Apr 01, 2024',
      amount: '$199.99',
      status: 'paid' as const,
    },
    {
      id: 'INV-2024-003',
      date: 'Mar 01, 2024',
      amount: '$199.99',
      status: 'paid' as const,
    },
  ];

  const announcement = {
    id: '1',
    title: 'Planned Maintenance',
    content: 'We will be performing a scheduled system upgrade on May 20, 2024, from 2:00 AM to 4:00 AM UTC. During this time, some services may be temporarily unavailable.',
    date: 'May 13, 2024',
    type: 'warning' as const,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Active Tunnels"
            value="256"
            description="24h Change: +12"
            icon={<Network className="h-5 w-5 text-vpn-blue" />}
            iconClass="bg-vpn-blue/10"
            trend={{ value: 4.5, isPositive: true }}
          />
          <StatsCard
            title="Bandwidth Usage"
            value="1.2 TB"
            description="24h Total"
            icon={<Activity className="h-5 w-5 text-vpn-purple" />}
            iconClass="bg-vpn-purple/10"
            trend={{ value: 2.7, isPositive: true }}
          />
          <StatsCard
            title="Server Uptime"
            value="99.95%"
            description="30-day average"
            icon={<Server className="h-5 w-5 text-vpn-cyan" />}
            iconClass="bg-vpn-cyan/10"
          />
          <StatsCard
            title="Balance"
            value="$1,276.45"
            description="Next invoice: May 31"
            icon={<CreditCard className="h-5 w-5 text-vpn-green" />}
            iconClass="bg-vpn-green/10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <WorldMap className="h-[300px]" />
            
            <BandwidthChart data={bandwidthData} />
            
            <div>
              <h2 className="text-lg font-medium mb-3">Server Status</h2>
              <ServerStatusTable servers={servers} />
            </div>
          </div>
          
          <div className="space-y-6">
            <AccountInfoCard accountInfo={accountInfo} />
            <NetworkToolsCard />
            <AnnouncementCard announcement={announcement} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

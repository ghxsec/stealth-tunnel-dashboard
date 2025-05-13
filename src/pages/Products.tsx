
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProductCard from "@/components/dashboard/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

const Products = () => {
  // Sample data, in a real app this would come from an API
  const products = [
    {
      id: '1',
      name: 'VPN Basic Plan',
      description: 'Standard VPN access with 5 simultaneous connections, 50GB bandwidth.',
      price: '$9.99/month',
      stock: 999,
      status: 'available' as const,
    },
    {
      id: '2',
      name: 'VPN Premium Plan',
      description: 'Advanced VPN with unlimited connections, 500GB bandwidth, and priority support.',
      price: '$19.99/month',
      stock: 999,
      status: 'available' as const,
    },
    {
      id: '3',
      name: 'Dedicated IP Add-on',
      description: 'Get a static, dedicated IP address for your VPN connection.',
      price: '$4.99/month',
      stock: 84,
      status: 'low' as const,
    },
    {
      id: '4',
      name: 'Business VPN Package',
      description: 'Enterprise-grade VPN solution with team management and custom setup.',
      price: '$199.99/month',
      stock: 32,
      status: 'low' as const,
    },
    {
      id: '5',
      name: 'Gaming Tunnel Optimizer',
      description: 'Special routing for gamers to reduce latency and packet loss.',
      price: '$7.99/month',
      stock: 0,
      status: 'out_of_stock' as const,
    },
    {
      id: '6',
      name: 'Multi-region Proxy Pack',
      description: 'Access to proxy servers in 50+ countries for web scraping and testing.',
      price: '$29.99/month',
      stock: 999,
      status: 'available' as const,
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Products & Services</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Product
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="vpn">VPN Services</TabsTrigger>
            <TabsTrigger value="tunnel">Tunneling</TabsTrigger>
            <TabsTrigger value="addon">Add-ons</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="vpn" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter(p => p.name.includes('VPN'))
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tunnel" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter(p => p.name.includes('Tunnel') || p.name.includes('Proxy'))
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="addon" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter(p => p.name.includes('Add-on') || p.description.includes('add-on'))
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Products;

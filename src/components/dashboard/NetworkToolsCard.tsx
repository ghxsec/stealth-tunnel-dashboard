
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NetworkToolsCard = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [hostname, setHostname] = useState('');
  const [result, setResult] = useState<string | null>(null);
  
  const handleIP = () => {
    // In a real app, this would call an API
    setResult(`Public IP: 203.0.113.195`);
  };
  
  const handleHostToIP = () => {
    // In a real app, this would call an API
    if (hostname) {
      setResult(`${hostname} resolves to 198.51.100.234`);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Network Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="myip" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="myip">My IP</TabsTrigger>
            <TabsTrigger value="hosttoip">Host to IP</TabsTrigger>
          </TabsList>
          
          <TabsContent value="myip" className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Check your current public IP address
            </div>
            <Button onClick={handleIP} className="w-full">
              Check My IP
            </Button>
          </TabsContent>
          
          <TabsContent value="hosttoip" className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm" htmlFor="hostname">
                Hostname or URL
              </label>
              <div className="flex space-x-2">
                <Input
                  id="hostname"
                  placeholder="example.com"
                  value={hostname}
                  onChange={(e) => setHostname(e.target.value)}
                />
                <Button onClick={handleHostToIP}>Lookup</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {result && (
          <div className="mt-4 p-3 bg-secondary/40 rounded-md border border-border text-sm">
            {result}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NetworkToolsCard;

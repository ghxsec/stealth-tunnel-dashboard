
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ServerNode {
  id: string;
  lat: number;
  lng: number;
  name: string;
  status: 'active' | 'down';
  region: string;
}

interface WorldMapProps {
  serverNodes?: ServerNode[];
  className?: string;
}

const WorldMap: React.FC<WorldMapProps> = ({ 
  serverNodes = [], 
  className 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<ServerNode | null>(null);
  
  // This would be replaced with actual map implementation using a library like react-simple-maps
  // For now, we'll use a placeholder
  
  return (
    <div className={cn("relative rounded-md overflow-hidden border border-border", className)}>
      <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="text-primary font-bold">World Map Visualization</div>
          <p className="text-sm text-muted-foreground">Displays VPN server locations around the world</p>
          <p className="text-xs mt-2 text-muted-foreground">(This is a placeholder for the map component)</p>
        </div>
      </div>
      <div ref={mapRef} className="w-full h-full">
        {/* Map would render here with server nodes */}
      </div>
      
      {selectedNode && (
        <div className="absolute bottom-4 left-4 bg-background/90 p-3 rounded-md border border-border">
          <h3 className="font-medium text-sm">{selectedNode.name}</h3>
          <p className="text-xs text-muted-foreground">{selectedNode.region}</p>
          <div className="flex items-center mt-1">
            <span className={cn("h-2 w-2 rounded-full mr-1", 
              selectedNode.status === 'active' ? "bg-vpn-green" : "bg-vpn-red")} />
            <span className="text-xs">{selectedNode.status === 'active' ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;

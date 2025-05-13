
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ServerStatus {
  id: string;
  name: string;
  location: string;
  status: 'operational' | 'degraded' | 'down';
  uptime: string;
  load: number;
}

interface ServerStatusTableProps {
  servers: ServerStatus[];
  className?: string;
}

const ServerStatusTable: React.FC<ServerStatusTableProps> = ({ servers, className }) => {
  const getStatusBadgeClass = (status: ServerStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'bg-vpn-green/20 text-vpn-green';
      case 'degraded':
        return 'bg-vpn-yellow/20 text-vpn-yellow';
      case 'down':
        return 'bg-vpn-red/20 text-vpn-red';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className={cn("rounded-md border overflow-hidden", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Server</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="w-[120px]">Status</TableHead>
            <TableHead className="w-[100px]">Uptime</TableHead>
            <TableHead className="w-[90px] text-right">Load</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {servers.map((server) => (
            <TableRow key={server.id}>
              <TableCell className="font-medium">{server.name}</TableCell>
              <TableCell>{server.location}</TableCell>
              <TableCell>
                <span className={cn("py-1 px-2 rounded-md text-xs font-medium", getStatusBadgeClass(server.status))}>
                  {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                </span>
              </TableCell>
              <TableCell>{server.uptime}</TableCell>
              <TableCell className="text-right">{server.load}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServerStatusTable;

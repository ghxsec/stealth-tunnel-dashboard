
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'paid' | 'pending' | 'overdue';
}

interface InvoiceListProps {
  invoices: Invoice[];
  className?: string;
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices, className }) => {
  const getStatusBadge = (status: Invoice['status']) => {
    switch (status) {
      case 'paid':
        return (
          <Badge className="bg-vpn-green/20 text-vpn-green border-vpn-green/30 hover:bg-vpn-green/30">
            Paid
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-vpn-yellow/20 text-vpn-yellow border-vpn-yellow/30 hover:bg-vpn-yellow/30">
            Pending
          </Badge>
        );
      case 'overdue':
        return (
          <Badge className="bg-vpn-red/20 text-vpn-red border-vpn-red/30 hover:bg-vpn-red/30">
            Overdue
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">#{invoice.id}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{getStatusBadge(invoice.status)}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <FileText className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoiceList;

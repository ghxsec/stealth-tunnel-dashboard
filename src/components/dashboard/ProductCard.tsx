
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  status: 'available' | 'low' | 'out_of_stock';
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  stock,
  status,
  className,
}) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return (
          <Badge variant="outline" className="bg-vpn-green/10 text-vpn-green border-vpn-green/30">
            Available
          </Badge>
        );
      case 'low':
        return (
          <Badge variant="outline" className="bg-vpn-yellow/10 text-vpn-yellow border-vpn-yellow/30">
            Low Stock
          </Badge>
        );
      case 'out_of_stock':
        return (
          <Badge variant="outline" className="bg-vpn-red/10 text-vpn-red border-vpn-red/30">
            Out of Stock
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={cn("p-4 transition-all hover:border-primary/50", className)}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium">{name}</h3>
        {getStatusBadge(status)}
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Price</p>
          <p className="font-medium">{price}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Stock</p>
          <p className="font-medium">{stock} remaining</p>
        </div>
      </div>
      <Button variant="outline" size="sm" className="w-full mt-4">
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;

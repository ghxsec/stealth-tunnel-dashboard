
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  iconClass?: string;
}

const StatsCard = ({
  title,
  value,
  description,
  icon,
  trend,
  className,
  iconClass,
}: StatsCardProps) => {
  return (
    <Card className={cn("p-4 overflow-hidden relative", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
          {trend && (
            <div className="flex items-center gap-1 mt-1">
              <span
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive ? "text-vpn-green" : "text-vpn-red"
                )}
              >
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value).toFixed(1)}%
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className={cn("p-2 rounded-md", iconClass)}>
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatsCard;

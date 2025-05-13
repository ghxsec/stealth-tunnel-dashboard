
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface AccountInfoCardProps {
  accountInfo: {
    username: string;
    email: string;
    plan: string;
    status: string;
    validUntil: string;
    permissions: string[];
  };
  className?: string;
}

const AccountInfoCard: React.FC<AccountInfoCardProps> = ({ accountInfo, className }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="text-base font-medium">Account Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Username</span>
          <span className="font-medium">{accountInfo.username}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Email</span>
          <span className="font-medium">{accountInfo.email}</span>
        </div>

        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Plan</span>
            <span className="font-medium">{accountInfo.plan}</span>
          </div>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs", 
              accountInfo.status === 'Active' 
                ? "bg-vpn-green/10 text-vpn-green border-vpn-green/30" 
                : "bg-vpn-red/10 text-vpn-red border-vpn-red/30"
            )}
          >
            {accountInfo.status}
          </Badge>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Valid Until</span>
          <span className="font-medium">{accountInfo.validUntil}</span>
        </div>

        <Separator />

        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground mb-1">Permissions</span>
          <div className="flex flex-wrap gap-1">
            {accountInfo.permissions.map((permission, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {permission}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountInfoCard;

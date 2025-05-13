
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'warning' | 'critical';
}

interface AnnouncementCardProps {
  announcement: Announcement;
  className?: string;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  announcement,
  className,
}) => {
  const getAnnouncementBadge = (type: Announcement['type']) => {
    switch (type) {
      case 'info':
        return (
          <Badge className="bg-vpn-blue/20 text-vpn-blue border-vpn-blue/30">
            Info
          </Badge>
        );
      case 'warning':
        return (
          <Badge className="bg-vpn-yellow/20 text-vpn-yellow border-vpn-yellow/30">
            Warning
          </Badge>
        );
      case 'critical':
        return (
          <Badge className="bg-vpn-red/20 text-vpn-red border-vpn-red/30">
            Critical
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {announcement.title}
        </CardTitle>
        {getAnnouncementBadge(announcement.type)}
      </CardHeader>
      <CardContent>
        <div className="text-sm">{announcement.content}</div>
        <div className="text-xs text-muted-foreground mt-2">
          Posted on {announcement.date}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;

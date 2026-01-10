import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Mail, Phone } from "lucide-react";

interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "checked-in" | "checked-out" | "upcoming" | "vip";
  room: string;
  checkIn: string;
  checkOut: string;
  avatar?: string;
}

const guests: Guest[] = [
  {
    id: "1",
    name: "Alexandra Sterling",
    email: "alexandra@email.com",
    phone: "+1 (555) 123-4567",
    status: "checked-in",
    room: "Suite 401",
    checkIn: "Jan 8, 2026",
    checkOut: "Jan 12, 2026",
  },
  {
    id: "2",
    name: "James Morrison",
    email: "james.m@email.com",
    phone: "+1 (555) 234-5678",
    status: "vip",
    room: "Penthouse",
    checkIn: "Jan 7, 2026",
    checkOut: "Jan 15, 2026",
  },
  {
    id: "3",
    name: "Sofia Chen",
    email: "sofia.chen@email.com",
    phone: "+1 (555) 345-6789",
    status: "upcoming",
    room: "Room 212",
    checkIn: "Jan 11, 2026",
    checkOut: "Jan 14, 2026",
  },
  {
    id: "4",
    name: "Marcus Williams",
    email: "marcus.w@email.com",
    phone: "+1 (555) 456-7890",
    status: "checked-out",
    room: "Room 305",
    checkIn: "Jan 5, 2026",
    checkOut: "Jan 9, 2026",
  },
  {
    id: "5",
    name: "Emma Thompson",
    email: "emma.t@email.com",
    phone: "+1 (555) 567-8901",
    status: "checked-in",
    room: "Suite 502",
    checkIn: "Jan 9, 2026",
    checkOut: "Jan 13, 2026",
  },
];

const statusStyles = {
  "checked-in": "bg-success/10 text-success border-success/20",
  "checked-out": "bg-muted text-muted-foreground border-muted-foreground/20",
  "upcoming": "bg-info/10 text-info border-info/20",
  "vip": "bg-gold/10 text-gold-dark border-gold/20",
};

const statusLabels = {
  "checked-in": "Checked In",
  "checked-out": "Checked Out",
  "upcoming": "Upcoming",
  "vip": "VIP Guest",
};

export function GuestTable() {
  return (
    <div className="glass-card overflow-hidden animate-slide-up">
      <div className="px-6 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">Recent Guests</h3>
            <p className="text-sm text-muted-foreground">Manage your hotel guests and reservations</p>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Guest
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Room
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Check-in
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Check-out
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {guests.map((guest) => (
              <tr key={guest.id} className="table-row-hover">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-gold/20">
                      <AvatarImage src={guest.avatar} />
                      <AvatarFallback className="bg-navy text-primary-foreground font-medium">
                        {guest.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground">{guest.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3.5 w-3.5" />
                      {guest.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      {guest.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-foreground">{guest.room}</span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {guest.checkIn}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {guest.checkOut}
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className={statusStyles[guest.status]}>
                    {statusLabels[guest.status]}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

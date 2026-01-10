import { Calendar, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Reservation {
  id: string;
  guestName: string;
  roomType: string;
  checkIn: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
}

const reservations: Reservation[] = [
  {
    id: "1",
    guestName: "Michael Anderson",
    roomType: "Deluxe Suite",
    checkIn: "Today",
    time: "2:00 PM",
    status: "confirmed",
  },
  {
    id: "2",
    guestName: "Sarah Mitchell",
    roomType: "Ocean View Room",
    checkIn: "Today",
    time: "3:30 PM",
    status: "confirmed",
  },
  {
    id: "3",
    guestName: "David Park",
    roomType: "Executive Suite",
    checkIn: "Tomorrow",
    time: "11:00 AM",
    status: "pending",
  },
  {
    id: "4",
    guestName: "Lisa Rodriguez",
    roomType: "Standard Room",
    checkIn: "Tomorrow",
    time: "4:00 PM",
    status: "confirmed",
  },
];

const statusDot = {
  confirmed: "bg-success",
  pending: "bg-warning",
  cancelled: "bg-destructive",
};

export function ReservationCard() {
  return (
    <div className="glass-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="px-6 py-4 border-b border-border">
        <h3 className="font-serif text-lg font-semibold text-foreground">Upcoming Arrivals</h3>
        <p className="text-sm text-muted-foreground">Today's and tomorrow's check-ins</p>
      </div>
      
      <div className="divide-y divide-border">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="px-6 py-4 hover:bg-muted/30 transition-colors duration-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5">
                  <User className="h-5 w-5 text-navy" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{reservation.guestName}</p>
                  <p className="text-sm text-muted-foreground">{reservation.roomType}</p>
                </div>
              </div>
              <div className={cn(
                "h-2 w-2 rounded-full mt-2",
                statusDot[reservation.status]
              )} />
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {reservation.checkIn}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {reservation.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

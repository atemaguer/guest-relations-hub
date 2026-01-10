import { UserPlus, CalendarPlus, BedDouble, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    label: "New Guest",
    icon: UserPlus,
    description: "Register a new guest",
  },
  {
    label: "New Booking",
    icon: CalendarPlus,
    description: "Create a reservation",
  },
  {
    label: "Room Status",
    icon: BedDouble,
    description: "Update room availability",
  },
  {
    label: "Generate Report",
    icon: FileText,
    description: "Export analytics data",
  },
];

export function QuickActions() {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto flex-col items-start gap-2 p-4 hover:bg-gold/5 hover:border-gold/30 transition-all duration-200"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5">
                <Icon className="h-4 w-4 text-navy" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

import { Users, BedDouble, DollarSign, TrendingUp } from "lucide-react";
import { StatCard } from "./StatCard";
import { GuestTable } from "./GuestTable";
import { ReservationCard } from "./ReservationCard";
import { QuickActions } from "./QuickActions";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Good morning, John
        </h2>
        <p className="text-muted-foreground mt-1">
          Here's what's happening at Grand Hotel today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Guests"
          value="284"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          iconColor="navy"
        />
        <StatCard
          title="Occupancy Rate"
          value="87%"
          change="+5% from yesterday"
          changeType="positive"
          icon={BedDouble}
          iconColor="gold"
        />
        <StatCard
          title="Revenue Today"
          value="$24,580"
          change="+8% from average"
          changeType="positive"
          icon={DollarSign}
          iconColor="success"
        />
        <StatCard
          title="Avg. Stay Duration"
          value="3.2 days"
          change="Same as last week"
          changeType="neutral"
          icon={TrendingUp}
          iconColor="info"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Guest Table - Takes 2 columns */}
        <div className="lg:col-span-2">
          <GuestTable />
        </div>

        {/* Right Sidebar - Takes 1 column */}
        <div className="space-y-6">
          <ReservationCard />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

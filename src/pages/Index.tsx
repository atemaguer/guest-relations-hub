import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="pl-64">
        <Header />
        <main className="p-6">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab !== "dashboard" && (
            <div className="flex items-center justify-center h-[60vh]">
              <div className="text-center">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                <p className="text-muted-foreground">
                  This section is coming soon.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;

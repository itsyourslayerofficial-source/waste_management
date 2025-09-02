import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import AnalyticsChart from "@/components/AnalyticsChart";
import { 
  Building, 
  Users, 
  Truck, 
  BarChart3, 
  MapPin, 
  Settings, 
  FileText, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const MunicipalityAdmin = () => {
  const adminStats = [
    {
      title: "Total Wards",
      value: "45",
      subtitle: "Active municipal wards",
      icon: <MapPin className="h-5 w-5" />,
      trend: { value: "0%", isPositive: true }
    },
    {
      title: "Active Workers",
      value: "1,250",
      subtitle: "Registered waste workers",
      icon: <Users className="h-5 w-5" />,
      trend: { value: "+8%", isPositive: true }
    },
    {
      title: "Fleet Vehicles",
      value: "85",
      subtitle: "Collection vehicles",
      icon: <Truck className="h-5 w-5" />,
      trend: { value: "+5%", isPositive: true }
    },
    {
      title: "Monthly Collection",
      value: "2,450T",
      subtitle: "Waste collected this month",
      icon: <BarChart3 className="h-5 w-5" />,
      trend: { value: "+12%", isPositive: true }
    }
  ];

  const collectionData = [
    { name: "Week 1", value: 580 },
    { name: "Week 2", value: 620 },
    { name: "Week 3", value: 590 },
    { name: "Week 4", value: 660 }
  ];

  const wardPerformance = [
    { name: "Ward 1", value: 95 },
    { name: "Ward 2", value: 88 },
    { name: "Ward 3", value: 92 },
    { name: "Ward 4", value: 85 },
    { name: "Ward 5", value: 90 }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Vehicle Breakdown",
      location: "Ward 12, Sector A",
      time: "2 hours ago",
      status: "urgent",
      priority: "high"
    },
    {
      id: 2,
      type: "Collection Delay",
      location: "Ward 8, Market Area",
      time: "4 hours ago", 
      status: "pending",
      priority: "medium"
    },
    {
      id: 3,
      type: "Route Completed",
      location: "Ward 5, Residential",
      time: "6 hours ago",
      status: "completed",
      priority: "low"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'urgent':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <FileText className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-700';
      case 'urgent':
        return 'bg-red-500/20 text-red-700';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-700';
      default:
        return 'bg-blue-500/20 text-blue-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-8 w-8 text-primary" />
                  <h1 className="text-3xl font-bold text-white">Municipality Admin Dashboard</h1>
                </div>
                <p className="text-white/80">
                  Comprehensive management and monitoring of municipal waste operations
                </p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <Button variant="hero">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Reports
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {adminStats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <AnalyticsChart
                title="Weekly Collection Trends"
                data={collectionData}
                type="line"
                dataKey="value"
                color="#22c55e"
              />
              <AnalyticsChart
                title="Ward Performance (%)"
                data={wardPerformance}
                type="bar"
                dataKey="value"
                color="#3b82f6"
              />
            </div>

            {/* Recent Alerts */}
            <Card className="card-gradient border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span>Recent Alerts & Activities</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Latest updates from municipal operations
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(alert.status)}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{alert.type}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                              {alert.priority}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{alert.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MunicipalityAdmin;
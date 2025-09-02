import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnalyticsChart from "@/components/AnalyticsChart";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Recycle, 
  Truck, 
  Users,
  CheckCircle,
  Clock,
  AlertTriangle,
  Award
} from "lucide-react";

const Dashboard = () => {
  // Sample data for analytics
  const wasteCollectionData = [
    { name: 'Jan', value: 450 },
    { name: 'Feb', value: 520 },
    { name: 'Mar', value: 480 },
    { name: 'Apr', value: 600 },
    { name: 'May', value: 580 },
    { name: 'Jun', value: 720 },
  ];

  const wasteTypeData = [
    { name: 'Organic', value: 340 },
    { name: 'Plastic', value: 180 },
    { name: 'Paper', value: 120 },
    { name: 'Glass', value: 80 },
    { name: 'Metal', value: 60 },
  ];

  const segregationTrendData = [
    { name: 'Week 1', value: 65 },
    { name: 'Week 2', value: 72 },
    { name: 'Week 3', value: 78 },
    { name: 'Week 4', value: 84 },
    { name: 'Week 5', value: 89 },
    { name: 'Week 6', value: 92 },
  ];

  const stats = [
    {
      title: "Total Reports",
      value: "1,247",
      subtitle: "This month",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      trend: { value: "15.3%", isPositive: true }
    },
    {
      title: "Collection Rate",
      value: "94.2%",
      subtitle: "On-time pickup",
      icon: <Truck className="h-5 w-5 text-primary" />,
      trend: { value: "2.1%", isPositive: true }
    },
    {
      title: "Segregation Score",
      value: "87%",
      subtitle: "Quality rating",
      icon: <Recycle className="h-5 w-5 text-primary" />,
      trend: { value: "8.5%", isPositive: true }
    },
    {
      title: "Active Users",
      value: "2,156",
      subtitle: "Community members",
      icon: <Users className="h-5 w-5 text-primary" />,
      trend: { value: "23.7%", isPositive: true }
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "report",
      message: "New waste report submitted at Sector 12",
      time: "2 minutes ago",
      status: "pending"
    },
    {
      id: 2,
      type: "collection",
      message: "Waste collected from Zone A-3",
      time: "15 minutes ago",
      status: "completed"
    },
    {
      id: 3,
      type: "training",
      message: "50 citizens completed segregation training",
      time: "1 hour ago",
      status: "completed"
    },
    {
      id: 4,
      type: "alert",
      message: "Overdue collection in Sector 8",
      time: "2 hours ago",
      status: "urgent"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'urgent':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <CheckCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'urgent':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 animate-fade-in-up">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor waste management activities and analytics in real-time
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Award className="h-3 w-3 mr-1" />
                Top Performer
              </Badge>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                {...stat}
                className="animate-scale-in hover-lift transition-all duration-300"
              />
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="animate-fade-in-up">
              <AnalyticsChart
                title="Waste Collection Trends"
                data={wasteCollectionData}
                type="line"
                dataKey="value"
                color="hsl(var(--primary))"
                height={350}
              />
            </div>
            <div className="animate-fade-in-up">
              <AnalyticsChart
                title="Waste Type Distribution"
                data={wasteTypeData}
                type="bar"
                dataKey="value"
                color="hsl(var(--accent))"
                height={350}
              />
            </div>
          </div>

          {/* Full Width Segregation Chart */}
          <div className="mb-8 animate-fade-in-up">
            <AnalyticsChart
              title="Segregation Quality Improvement"
              data={segregationTrendData}
              type="line"
              dataKey="value"
              color="hsl(var(--success))"
              height={300}
            />
          </div>

          {/* Recent Activities */}
          <div className="animate-fade-in-up">
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Recent Activities
                </CardTitle>
                <CardDescription>
                  Latest updates from your waste management operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div 
                      key={activity.id} 
                      className="flex items-start justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 hover-lift"
                    >
                      <div className="flex items-start gap-3">
                        {getStatusIcon(activity.status)}
                        <div>
                          <p className="font-medium text-sm">{activity.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`capitalize ${getStatusColor(activity.status)}`}
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="w-full sm:w-auto hover:scale-105 transition-all duration-200">
                    View All Activities
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
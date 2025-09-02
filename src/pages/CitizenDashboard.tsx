import { useState } from "react";
import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import AnalyticsChart from "@/components/AnalyticsChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Target, 
  FileText, 
  Calendar, 
  Bell, 
  TrendingUp,
  Camera,
  MapPin,
  CheckCircle,
  Clock
} from "lucide-react";

const CitizenDashboard = () => {
  const [user] = useState({
    name: "Priya Sharma",
    points: 2450,
    level: "Green Champion",
    reportsSubmitted: 23,
    trainingProgress: 85
  });

  const stats = [
    {
      title: "Total Points Earned",
      value: "2,450",
      subtitle: "This month: +340 points",
      icon: <Award className="h-5 w-5 text-primary" />,
      trend: { value: "16.2%", isPositive: true }
    },
    {
      title: "Reports Submitted",
      value: "23",
      subtitle: "Verified: 20 reports",
      icon: <FileText className="h-5 w-5 text-primary" />,
      trend: { value: "4", isPositive: true }
    },
    {
      title: "Training Progress",
      value: "85%",
      subtitle: "2 modules remaining",
      icon: <Target className="h-5 w-5 text-primary" />,
      trend: { value: "15%", isPositive: true }
    }
  ];

  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 600 },
    { name: "Mar", value: 800 },
    { name: "Apr", value: 1200 },
    { name: "May", value: 1800 },
    { name: "Jun", value: 2450 }
  ];

  const recentReports = [
    {
      id: 1,
      location: "MG Road, Sector 12",
      date: "Dec 15, 2024",
      status: "verified",
      points: 50,
      type: "Plastic Waste"
    },
    {
      id: 2,
      location: "Park Street",
      date: "Dec 13, 2024",
      status: "pending",
      points: 0,
      type: "Mixed Waste"
    },
    {
      id: 3,
      location: "Commercial Complex",
      date: "Dec 10, 2024",
      status: "verified",
      points: 75,
      type: "E-Waste"
    }
  ];

  const notifications = [
    {
      title: "Report Verified!",
      message: "Your plastic waste report from MG Road has been verified. +50 points earned!",
      time: "2 hours ago",
      type: "success"
    },
    {
      title: "New Training Module",
      message: "E-waste segregation training is now available. Complete to earn 100 points!",
      time: "1 day ago",
      type: "info"
    },
    {
      title: "Community Event",
      message: "Beach cleanup drive this Sunday. Join to earn bonus points!",
      time: "2 days ago",
      type: "event"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground mt-2">
              Track your environmental impact and earn rewards
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              {user.level}
            </Badge>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{user.points.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Points</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="hero" className="h-20 flex-col space-y-2">
                    <Camera className="h-6 w-6" />
                    <span>Report Waste</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Target className="h-6 w-6" />
                    <span>Continue Training</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Chart */}
            <AnalyticsChart
              title="Points Earned Over Time"
              data={chartData}
              type="line"
              color="hsl(var(--primary))"
            />

            {/* Recent Reports */}
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Reports</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(report.status)}
                          <div>
                            <p className="font-medium">{report.type}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              {report.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{report.date}</p>
                        {report.points > 0 && (
                          <p className="text-sm font-medium text-primary">+{report.points} pts</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Training Progress */}
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Training Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span>{user.trainingProgress}%</span>
                  </div>
                  <Progress value={user.trainingProgress} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Waste Segregation</span>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Composting Basics</span>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">E-Waste Management</span>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Recycling Techniques</span>
                    <Badge variant="outline">Locked</Badge>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Continue Learning
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/30 border-l-4 border-primary">
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-sm">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  PlayCircle, 
  CheckCircle, 
  Lock, 
  Award, 
  Clock,
  BookOpen,
  Users,
  TrendingUp,
  FileText,
  Video,
  Download,
  Star
} from "lucide-react";

const Training = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", count: 12 },
    { id: "segregation", name: "Waste Segregation", count: 4 },
    { id: "composting", name: "Composting", count: 3 },
    { id: "recycling", name: "Recycling", count: 3 },
    { id: "ewaste", name: "E-Waste", count: 2 }
  ];

  const courses = [
    {
      id: 1,
      title: "Basic Waste Segregation",
      description: "Learn the fundamentals of separating different types of waste for better environmental management.",
      category: "segregation",
      level: "Beginner",
      duration: "45 min",
      modules: 6,
      enrolled: 12450,
      rating: 4.8,
      progress: 100,
      status: "completed",
      points: 100,
      image: "🗂️"
    },
    {
      id: 2,
      title: "Advanced Plastic Waste Management",
      description: "Deep dive into plastic waste identification, sorting, and proper disposal methods.",
      category: "segregation",
      level: "Intermediate",
      duration: "1.2 hrs",
      modules: 8,
      enrolled: 8230,
      rating: 4.9,
      progress: 60,
      status: "in-progress",
      points: 150,
      image: "♻️"
    },
    {
      id: 3,
      title: "Home Composting Essentials",
      description: "Transform your organic waste into nutrient-rich compost for your garden.",
      category: "composting",
      level: "Beginner",
      duration: "50 min",
      modules: 5,
      enrolled: 9876,
      rating: 4.7,
      progress: 0,
      status: "not-started",
      points: 120,
      image: "🌱"
    },
    {
      id: 4,
      title: "E-Waste Handling & Safety",
      description: "Safe handling and disposal of electronic waste including batteries and devices.",
      category: "ewaste",
      level: "Intermediate",
      duration: "1 hr",
      modules: 7,
      enrolled: 5432,
      rating: 4.6,
      progress: 0,
      status: "locked",
      points: 200,
      image: "📱"
    },
    {
      id: 5,
      title: "Paper & Cardboard Recycling",
      description: "Maximize the recycling potential of paper and cardboard waste materials.",
      category: "recycling",
      level: "Beginner",
      duration: "35 min",
      modules: 4,
      enrolled: 7654,
      rating: 4.5,
      progress: 25,
      status: "in-progress",
      points: 80,
      image: "📄"
    },
    {
      id: 6,
      title: "Community Waste Management",
      description: "Lead waste management initiatives in your community and apartment complexes.",
      category: "segregation",
      level: "Advanced",
      duration: "2 hrs",
      modules: 10,
      enrolled: 3456,
      rating: 4.9,
      progress: 0,
      status: "locked",
      points: 300,
      image: "🏘️"
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Complete your first course", icon: "🚀", unlocked: true },
    { title: "Segregation Master", description: "Complete all segregation courses", icon: "🎯", unlocked: true },
    { title: "Green Warrior", description: "Earn 500 training points", icon: "🌟", unlocked: false },
    { title: "Community Leader", description: "Complete advanced courses", icon: "👑", unlocked: false }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "in-progress":
        return <PlayCircle className="h-5 w-5 text-warning" />;
      case "locked":
        return <Lock className="h-5 w-5 text-muted-foreground" />;
      default:
        return <BookOpen className="h-5 w-5 text-primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "in-progress":
        return "bg-warning/10 text-warning border-warning/20";
      case "locked":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Training Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master waste management with our comprehensive training courses. 
            Learn, practice, and earn points while making a difference.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient border-0 shadow-md text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-sm text-muted-foreground">Total Courses</p>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-0 shadow-md text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-0 shadow-md text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
          
          <Card className="card-gradient border-0 shadow-md text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">250</h3>
              <p className="text-sm text-muted-foreground">Points Earned</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 p-2 rounded-lg ${
                      achievement.unlocked ? "bg-primary/5" : "opacity-50"
                    }`}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.unlocked && <CheckCircle className="h-4 w-4 text-success" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Course Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover-lift card-gradient border-0 shadow-md">
                  <CardContent className="p-6">
                    {/* Course Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl mb-2">{course.image}</div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(course.status)}>
                          {getStatusIcon(course.status)}
                          <span className="ml-1 capitalize">{course.status.replace('-', ' ')}</span>
                        </Badge>
                      </div>
                    </div>

                    {/* Course Title & Description */}
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                    {/* Course Meta */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-3 w-3 mr-1" />
                        {course.modules} modules
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {course.enrolled.toLocaleString()}
                      </div>
                    </div>

                    {/* Level & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>

                    {/* Progress */}
                    {course.status !== "locked" && course.status !== "not-started" && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    {/* Points & Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-accent font-medium">
                        <Award className="h-4 w-4 mr-1" />
                        {course.points} points
                      </div>
                      <Button 
                        variant={course.status === "locked" ? "outline" : "hero"}
                        size="sm"
                        disabled={course.status === "locked"}
                        className="min-w-[100px]"
                      >
                        {course.status === "completed" && "Review"}
                        {course.status === "in-progress" && "Continue"}
                        {course.status === "not-started" && "Start"}
                        {course.status === "locked" && "Locked"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Learning Path */}
            <Card className="mt-8 card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recommended Learning Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-sm font-bold text-white">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Master the Basics</p>
                      <p className="text-sm text-muted-foreground">Complete beginner-level segregation courses</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-warning/10">
                    <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center text-sm font-bold text-white">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Specialized Training</p>
                      <p className="text-sm text-muted-foreground">Learn composting and recycling techniques</p>
                    </div>
                    <Clock className="h-5 w-5 text-warning" />
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-8 h-8 bg-muted-foreground rounded-full flex items-center justify-center text-sm font-bold text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Advanced Leadership</p>
                      <p className="text-sm text-muted-foreground">Community management and leadership skills</p>
                    </div>
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Training;
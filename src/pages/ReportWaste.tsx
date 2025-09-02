import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MapPin, 
  Upload, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  FileText,
  Map,
  Filter
} from "lucide-react";

const ReportWaste = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [location, setLocation] = useState("Detecting location...");
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");

  const previousReports = [
    {
      id: 1,
      type: "Plastic Waste",
      location: "MG Road, Sector 12",
      date: "2024-12-15",
      status: "verified",
      points: 50,
      coordinates: { lat: 28.5355, lng: 77.3910 }
    },
    {
      id: 2,
      type: "Mixed Waste",
      location: "Park Street, Central Delhi",
      date: "2024-12-13",
      status: "pending",
      points: 0,
      coordinates: { lat: 28.6139, lng: 77.2090 }
    },
    {
      id: 3,
      type: "E-Waste",
      location: "Commercial Complex, Gurgaon",
      date: "2024-12-10",
      status: "verified",
      points: 75,
      coordinates: { lat: 28.4595, lng: 77.0266 }
    },
    {
      id: 4,
      type: "Organic Waste",
      location: "Residency Road",
      date: "2024-12-08",
      status: "rejected",
      points: 0,
      coordinates: { lat: 28.5246, lng: 77.1855 }
    }
  ];

  const wasteTypes = [
    "Plastic Waste",
    "Organic Waste", 
    "E-Waste",
    "Mixed Waste",
    "Hazardous Waste",
    "Construction Debris",
    "Glass Waste",
    "Metal Waste"
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const getLocationHandler = () => {
    if (navigator.geolocation) {
      setLocation("Getting location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        },
        () => {
          setLocation("Location access denied");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "rejected":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-success/10 text-success border-success/20";
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "rejected":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Report submitted:", {
      file: selectedFile,
      location,
      type: reportType,
      description
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Report Waste</h1>
          <p className="text-muted-foreground">
            Help keep your community clean by reporting waste in your area
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Submit New Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Photo Upload */}
                  <div>
                    <Label htmlFor="photo" className="text-sm font-medium">
                      Upload Photo *
                    </Label>
                    <div className="mt-2">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="photo"
                          className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {selectedFile ? (
                              <>
                                <CheckCircle className="h-10 w-10 text-success mb-2" />
                                <p className="mb-2 text-sm text-foreground font-medium">
                                  {selectedFile.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Click to change photo
                                </p>
                              </>
                            ) : (
                              <>
                                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                                <p className="mb-2 text-sm text-muted-foreground">
                                  <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  PNG, JPG up to 10MB
                                </p>
                              </>
                            )}
                          </div>
                          <Input
                            id="photo"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileUpload}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <Label className="text-sm font-medium">Location *</Label>
                    <div className="mt-2 flex space-x-2">
                      <Input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location or use GPS"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={getLocationHandler}
                        className="px-3"
                      >
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Waste Type */}
                  <div>
                    <Label className="text-sm font-medium">Waste Type *</Label>
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent>
                        {wasteTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-sm font-medium">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Provide additional details about the waste (optional)"
                      className="mt-2 min-h-[100px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={!selectedFile || !location || !reportType}
                  >
                    Submit Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <Card className="card-gradient border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Reporting Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Camera className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Take clear photos showing the waste and surrounding area</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Enable location services for accurate geo-tagging</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Provide detailed descriptions to help authorities respond</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Points Reward */}
            <Card className="card-gradient border-0 shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Earn Points!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get 25-100 points for each verified report based on waste type and quality
                  </p>
                  <Badge variant="secondary" className="text-primary">
                    Up to 100 points
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Previous Reports */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">My Previous Reports</h2>
              <p className="text-muted-foreground">Track the status of your submitted reports</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Map className="h-4 w-4 mr-2" />
                Map View
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousReports.map((report) => (
              <Card key={report.id} className="hover-lift card-gradient border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getStatusColor(report.status)}>
                      {getStatusIcon(report.status)}
                      <span className="ml-1 capitalize">{report.status}</span>
                    </Badge>
                    {report.points > 0 && (
                      <span className="text-sm font-medium text-primary">
                        +{report.points} pts
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold mb-2">{report.type}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      {report.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      {new Date(report.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportWaste;
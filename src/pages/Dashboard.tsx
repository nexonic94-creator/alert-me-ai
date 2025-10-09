import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

interface JobAlert {
  id: string;
  name: string;
  email: string;
  keywords: string;
  location: string;
  jobType: string;
  salaryRange: string;
  notificationPreference: string;
  createdAt: string;
}

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alerts, setAlerts] = useState<JobAlert[]>([
    {
      id: "1",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@gmail.com",
      keywords: "React Developer",
      location: "Bangalore, Karnataka",
      jobType: "Remote",
      salaryRange: "₹8-12 LPA",
      notificationPreference: "Email",
      createdAt: "2024-01-15"
    }
  ]);
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [notificationPreference, setNotificationPreference] = useState("");
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const webhookUrl = "https://achjaiswalint.app.n8n.cloud/webhook/ainotifyer/webhook/ainotifyer";
    
    const alertData = {
      name,
      email,
      keywords,
      location,
      jobType,
      salaryRange,
      notificationPreference,
      createdAt: new Date().toISOString().split('T')[0]
    };

    try {
      // Send data to n8n webhook
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS for external webhook
        body: JSON.stringify(alertData),
      });

      console.log("Webhook data sent:", alertData);
      
      // Add to local state for UI feedback
      const newAlert: JobAlert = {
        ...alertData,
        id: Date.now().toString(),
      };
      
      setAlerts(prev => [newAlert, ...prev]);
      
      // Reset form
      setName("");
      setEmail("");
      setKeywords("");
      setLocation("");
      setJobType("");
      setSalaryRange("");
      setNotificationPreference("");
      
      toast({
        title: "Job alert created successfully!",
        description: "Your alert has been sent to our AI system. You'll receive notifications when matching jobs are found.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create job alert. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Welcome back! 👋
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create intelligent job alerts and let AI find your perfect opportunities
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Create Alert Form */}
          <Card className="card-hover animate-scale-in">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <CardTitle className="text-2xl">Create New Job Alert</CardTitle>
              </div>
              <CardDescription className="text-base">
                Set up an AI-powered job alert tailored to your preferences and skills
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g. priya.sharma@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords/Skills</Label>
                  <Input
                    id="keywords"
                    placeholder="e.g. React, Frontend Developer, JavaScript"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g. Mumbai, Bangalore, Delhi or Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type</Label>
                  <Select value={jobType} onValueChange={setJobType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="onsite">Onsite</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range</Label>
                  <Input
                    id="salary"
                    placeholder="e.g. ₹8-12 LPA or ₹50,000-80,000 per month"
                    value={salaryRange}
                    onChange={(e) => setSalaryRange(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notification">Notification Preference</Label>
                  <Select value={notificationPreference} onValueChange={setNotificationPreference} required>
                    <SelectTrigger>
                      <SelectValue placeholder="How would you like to be notified?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-professional text-lg py-6" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                      <span>Creating Alert...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>🚀</span>
                      <span>Create Job Alert</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Active Alerts */}
          <Card className="card-hover animate-scale-in">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <span className="text-lg">📋</span>
                  </div>
                  <CardTitle className="text-2xl">Your Job Alerts</CardTitle>
                </div>
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {alerts.length} Active
                </div>
              </div>
              <CardDescription className="text-base">
                Manage and monitor your active job alerts
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {alerts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-hero/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <p className="text-muted-foreground text-lg mb-2">No job alerts yet</p>
                  <p className="text-sm text-muted-foreground">Create your first alert to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div 
                      key={alert.id} 
                      className="p-6 border border-border rounded-xl hover-scale bg-gradient-to-r from-background to-secondary/20 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-foreground text-lg">{alert.keywords}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">📍</span>
                          <span className="text-muted-foreground">{alert.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">💼</span>
                          <span className="text-muted-foreground capitalize">{alert.jobType}</span>
                        </div>
                        {alert.salaryRange && (
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">💰</span>
                            <span className="text-muted-foreground">{alert.salaryRange}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">🔔</span>
                          <span className="text-muted-foreground capitalize">{alert.notificationPreference}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">Created: {alert.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
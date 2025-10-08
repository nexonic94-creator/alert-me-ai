import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About AI Job Notifier</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing job searching with AI-powered matching and instant notifications
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>🎯 Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI Job Notifier helps job seekers by matching jobs from multiple sources and sending alerts. 
                We believe finding the right job shouldn't be a full-time job itself.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>🤖 How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our AI analyzes your skills and preferences, then continuously scans job boards 
                to find perfect matches. You get notified instantly when relevant opportunities appear.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>⚡ Built With</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built using n8n for powerful automation workflows and Lovable for the frontend experience. 
                This combination ensures reliable, scalable job matching and notifications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>📈 Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• AI-powered job matching</li>
                <li>• Multiple job sources</li>
                <li>• Instant notifications</li>
                <li>• Personalized alerts</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="shadow-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to Get Started?</CardTitle>
              <CardDescription>
                Join thousands of professionals who never miss their dream job
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/signup">
                    Create Free Account
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:autopicher8899@gmail.com">
                    Contact Us
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions? Reach out to us at{" "}
                <a href="mailto:autopicher8899@gmail.com" className="text-primary hover:text-primary-hover">
                  autopicher8899@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
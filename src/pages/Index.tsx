import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Get AI-powered Job Alerts,{" "}
              <span className="gradient-text animate-pulse-glow">
                Instantly
              </span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Tell us your skills once. We'll send you matching jobs daily.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-gentle">
              <Link to="/signup">
                <Button size="lg" className="btn-professional px-8 py-4 text-lg font-semibold">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover-scale">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in">
            <p className="text-sm text-muted-foreground mb-4">Trusted by professionals at</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="px-4 py-2 bg-white/5 rounded-lg">Google</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg">Microsoft</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg">Amazon</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg">Meta</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to never miss your dream job again
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 hover-glow">
                  <span className="text-3xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle className="text-2xl mb-4">Create Alert</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tell us your skills, location preferences, and what you're looking for in your next role. Our smart form makes it quick and easy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 hover-glow">
                  <span className="text-2xl">🤖</span>
                </div>
                <CardTitle className="text-2xl mb-4">AI Finds Jobs</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our advanced AI scans hundreds of job boards 24/7 and intelligently matches opportunities to your specific criteria and preferences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 hover-glow">
                  <span className="text-2xl">📧</span>
                </div>
                <CardTitle className="text-2xl mb-4">Get Notified</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Receive instant notifications via email the moment perfect matches are found. No more daily job board browsing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Trusted by Job Seekers Everywhere
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <p className="text-muted-foreground">Jobs Matched</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
          
          <Card className="shadow-card max-w-2xl mx-auto">
            <CardContent className="py-8">
              <p className="text-lg text-muted-foreground italic mb-4">
                "AI Job Notifier helped me find my dream job in just 2 weeks. The AI matching is incredibly accurate!"
              </p>
              <p className="font-medium text-foreground">— Sarah Chen, Software Engineer</p>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <Link to="/signup">
              <Button size="lg">
                Start Getting Job Alerts Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

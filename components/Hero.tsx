import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profileImage from "./Prof pic.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Professional Photo - Big Circle with Border */}
<div className="mb-8 flex justify-center">
  <div className="relative h-60 w-60 rounded-full border-8 border-primary/20 p-1">
    <Avatar className="h-full w-full">
      <AvatarImage 
        src={profileImage} 
        alt="Mahmoud Mohamed Mahmoud" 
        className="rounded-full object-cover"
      />
      <AvatarFallback className="text-4xl bg-primary/10 text-primary h-full w-full flex items-center justify-center">
        MMM
      </AvatarFallback>
    </Avatar>
  </div>
</div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            Mahmoud Mohamed Mahmoud
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary mb-6">
            Aspiring DevOps and Cloud Engineer
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable, reliable automation and infrastructure solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            
            <div className="flex gap-3">
              <Button variant="ghost" size="lg" asChild>
                <a href="https://github.com/MahmoudEzzat8824" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="ghost" size="lg" asChild>
                <a href="https://linkedin.com/in/mahmoud-mohamed-510a87310" target="_blank" rel="noopener noreferrer" title="Visit my LinkedIn profile">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl mb-2 text-primary">2026</div>
              <div className="text-muted-foreground">Expected Graduation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-primary">5+</div>
              <div className="text-muted-foreground">Certifications Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-primary">CI/CD</div>
              <div className="text-muted-foreground">Pipeline Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
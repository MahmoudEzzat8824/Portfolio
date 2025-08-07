import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, GitBranch, Zap, Cloud } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Book Swap Website",
      description: "A comprehensive platform for book enthusiasts to exchange and discover literature. Features user authentication, advanced search capabilities, recommendation engine, and seamless book swap matching. Designed with cloud-ready architecture and automated deployment pipelines.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "Node.js", "MongoDB", "Docker", "Jenkins", "AWS EC2"],
      features: [
        "Automated CI/CD pipeline with Jenkins integration",
        "Docker containerization for consistent deployments",
        "Cloud-ready infrastructure on AWS",
        "Comprehensive testing and quality assurance"
      ],
      githubUrl: "https://github.com/MahmoudEzzat8824/Book-Swap",
      devopsHighlights: ["CI/CD", "Docker", "Cloud Deployment"]
    },
    {
      title: "Budget Tracker Application",
      description: "Personal finance management solution with advanced analytics, budget planning, and expense tracking. Built with modern React architecture and featuring robust DevOps practices including automated testing, containerized deployment, and continuous integration workflows.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "TypeScript", "Chart.js", "Docker", "GitHub Actions", "AWS"],
      features: [
        "Comprehensive CI/CD pipeline using GitHub Actions",
        "Docker containerization for development and production",
        "Automated testing and code quality checks",
        "Infrastructure as Code deployment strategies"
      ],
      githubUrl: "https://github.com/mahmoud-kaarem/Budget_Tracker",
      devopsHighlights: ["GitHub Actions", "Docker", "IaC"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Featured Projects</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing full-stack applications with modern DevOps practices, 
            CI/CD pipelines, and cloud-native deployment strategies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.devopsHighlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/90 text-white">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technology Stack */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* DevOps Features */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-primary" />
                    DevOps & Cloud Features
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="pt-6">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Project Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/10">
            <CardHeader>
              <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                DevOps Implementation Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2 text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Automated Testing Coverage</div>
                </div>
                <div>
                  <div className="text-2xl mb-2 text-primary">5 min</div>
                  <div className="text-sm text-muted-foreground">Average Deployment Time</div>
                </div>
                <div>
                  <div className="text-2xl mb-2 text-primary">Zero</div>
                  <div className="text-sm text-muted-foreground">Downtime Deployments</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
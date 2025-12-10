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
      title: "ICU Reservation & Management System",
      description: "Implemented a fully automated DevOps pipeline for a cloud-based ICU management system. Containerized frontend and backend services using Docker and deployed them on Kubernetes with Terraform-provisioned AWS infrastructure. Set up CI/CD pipelines using GitHub Actions and GitLab CI for automated testing, building, and deployment. Improved scalability, reliability, and deployment consistency through optimized Kubernetes configs, environment automation, and monitoring readiness.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "GitLab CI"],
      features: [
        "Fully automated CI/CD pipeline with GitHub Actions and GitLab CI",
        "Kubernetes orchestration for containerized services",
        "Infrastructure as Code with Terraform on AWS",
        "Optimized scalability, reliability, and deployment consistency"
      ],
      githubUrl: "https://github.com/Devopsians12/Devopsians",
      devopsHighlights: ["Kubernetes", "Terraform", "CI/CD"]
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
      </div>
    </section>
  );
}
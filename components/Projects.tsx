import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, GitBranch, Zap, Cloud } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Task Management Platform",
      description: "Reduced software release time by 80% through the automation of the full-stack deployment workflow using GitHub Actions CI/CD integrated with Docker Hub for container image management. Achieved 100% environment consistency and high availability by orchestrating containerized microservices using Kubernetes on AWS infrastructure. Minimized infrastructure setup time and manual configuration errors by automating the provisioning of AWS cloud resources using Terraform as Infrastructure as Code (IaC). Enhanced system reliability and observability by establishing a comprehensive monitoring stack using Prometheus and Grafana to track infrastructure health and performance metrics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "AWS", "Terraform", "Prometheus", "Grafana"],
      features: [
        "80% reduction in software release time through CI/CD automation",
        "100% environment consistency with Kubernetes orchestration",
        "Automated AWS infrastructure provisioning using Terraform IaC",
        "Comprehensive monitoring with Prometheus and Grafana stack"
      ],
      githubUrl: "https://github.com/MahmoudEzzat8824/nodejs-fullstack",
      devopsHighlights: ["CI/CD", "Kubernetes", "Terraform"]
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
      githubUrl: "https://github.com/MahmoudEzzat8824/ICUReservation-ManagementSystem",
      devopsHighlights: ["Kubernetes", "Terraform", "CI/CD"]
    },
    {
      title: "Server Health Check & Security Audit Platform",
      description: "Elevated fleet observability by 70% via a Flask interface orchestrating agentless Bash telemetry over SSH. Reduced manual auditing time by 60% using a modular utility to aggregate real-time system metrics. Strengthened security response with a self-executing module for parsing SSH logs and brute-force patterns. Streamlined monitoring delivery by implementing a CI/CD pipeline on Render with Gunicorn-optimized backends.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Flask", "Bash", "SSH", "Linux", "Render", "Gunicorn"],
      features: [
        "70% improvement in fleet observability via Flask interface with agentless Bash telemetry",
        "60% reduction in manual auditing time through real-time system metrics aggregation",
        "Enhanced security response with SSH log parsing and brute-force detection",
        "Automated CI/CD pipeline deployment on Render with optimized backends"
      ],
      githubUrl: "https://github.com/MahmoudEzzat8824/Health_Check",
      devopsHighlights: ["Monitoring", "Security", "Automation"]
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
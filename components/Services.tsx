import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

type Offering = {
  title: string;
  desc: string;
  points: string[];
  tag: string;
};

export function Services() {
  const offerings: Offering[] = [
    {
      title: "CI/CD Pipeline Development",
      desc: "Automated integration and deployment solutions tailored to your stack.",
      points: [
        "Pipelines in Jenkins and GitHub Actions",
        "Automated testing, quality gates, and artifacts",
        "Preview builds and zero-downtime releases",
      ],
      tag: "Pipelines",
    },
    {
      title: "Cloud Infrastructure Design",
      desc: "AWS-based scalable architecture with security and cost-awareness.",
      points: [
        "AWS EC2, VPC, IAM, networking baselines",
        "High-availability patterns and backups",
        "IaC-first deployments and drift control",
      ],
      tag: "AWS",
    },
    {
      title: "Containerization & Orchestration",
      desc: "Docker-based application transformation and delivery.",
      points: [
        "Dockerization strategy and best practices",
        "Multi-stage images and security scanning",
        "Local-to-cloud container workflow",
      ],
      tag: "Docker",
    },
    {
      title: "Infrastructure as Code",
      desc: "Automated, version-controlled provisioning using Terraform.",
      points: [
        "Reusable Terraform modules and workspaces",
        "Environment parity and secrets handling",
        "Change plans, reviews, and rollbacks",
      ],
      tag: "Terraform",
    },
    {
      title: "Monitoring & Automation",
      desc: "Comprehensive monitoring and automated alerting for reliability.",
      points: [
        "Metrics, logs, and alert rules",
        "Health checks and SLO tracking",
        "Automated runbooks and remediation hooks",
      ],
      tag: "Ops",
    },
    {
      title: "DevOps Consulting & Strategy",
      desc: "Expert guidance on DevOps transformation and growth.",
      points: [
        "Assessment of delivery lifecycle and maturity",
        "Roadmaps for tooling and culture",
        "Enablement and documentation",
      ],
      tag: "Consulting",
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-primary">Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear, outcome-focused offerings aligned with DevOps and Cloud Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {offerings.map((item, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">{item.tag}</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <Card className="bg-primary/5">
            <CardContent className="py-8">
              <h3 className="text-2xl mb-2 text-primary">Free Consultation & Custom Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Not sure where to start? Get a free consultation to discuss your pipeline, cloud, or automation goals. I’ll tailor a solution that fits your team and roadmap.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="#contact">Discuss Your Project</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

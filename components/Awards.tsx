import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Award, Calendar } from "lucide-react";

export function Awards() {
  const awards = [
    {
      title: "Best DevOps Project Award",
      organization: "Digital Egypt Pioneers Initiative (DEPI)",
      date: "2025",
      description: "Ranked 3rd for technical excellence in architecting ICU Management System. Engineered robust pipelines using Jenkins and GitLab CI to automate microservices deployment. Leveraged Terraform for AWS resource provisioning and orchestrated containers with Kubernetes. Implemented full-stack monitoring and alerting with Prometheus and Grafana.",
      achievement: "3rd Place",
      category: "DevOps Excellence"
    }
  ];

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Awards & Achievements</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for technical excellence, innovation, and outstanding contributions to projects and competitions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {awards.map((award, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
                      <div>
                        <CardTitle className="text-xl mb-2">{award.title}</CardTitle>
                        <CardDescription className="text-base">{award.organization}</CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="default" className="bg-primary">
                          {award.achievement}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {award.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <Badge variant="outline" className="border-primary/30">
                    {award.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

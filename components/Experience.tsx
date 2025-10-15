import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Code, Wrench, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      icon: Wrench,
      title: "DevOps Implementation Specialist",
      organization: "Personal Projects & Learning",
      period: "2023 - Present",
      description: "Implementing continuous integration and deployment pipelines for various projects. Focus on automation, testing, and deployment strategies using industry-standard tools and practices.",
      responsibilities: [
        "Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions",
        "Containerized applications using Docker for consistent deployment environments",
        "Automated testing processes and deployment workflows",
        "Implemented Infrastructure as Code using Terraform for AWS resources"
      ],
      skills: ["Jenkins", "Docker", "Terraform", "AWS", "CI/CD", "Automation"],
      type: "DevOps Experience"
    },
    {
      icon: Users,
      title: "Public Relations Committee Member",
      organization: "MSP (Microsoft Student Partners)",
      period: "2025 - Present",
      description: "Supporting public relations activities including outreach, partnerships, and communication strategies to grow community impact and engagement.",
      responsibilities: [
        "Coordinated with partners and speakers for community events",
        "Managed outreach campaigns and audience engagement",
        "Collaborated with team members to enhance PR strategy and execution"
      ],
      skills: ["Communication", "Community Engagement", "Team Collaboration", "Organization"],
      type: "Community Role"
    },
    {
      icon: Users,
      title: "Event Planner & Panel Moderator",
      organization: "Tech Heist Event",
      period: "11/10/2025",
      description: "Participated as an event planner and served as a panel moderator, coordinating logistics and facilitating panel discussions with speakers and attendees.",
      responsibilities: [
        "Planned event agenda and coordinated session logistics",
        "Moderated panel discussions and ensured smooth session flow",
        "Collaborated with speakers and volunteers to deliver a quality experience"
      ],
      skills: ["Event Planning", "Moderation", "Public Speaking", "Coordination"],
      type: "Event Organization"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Previous Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience through technical roles, projects, and community involvement
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          <CardDescription className="text-base">{experience.organization}</CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge variant="outline">{experience.type}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {experience.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="pl-4 relative">
                          <span className="absolute left-0 top-2 w-1 h-1 bg-primary rounded-full"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
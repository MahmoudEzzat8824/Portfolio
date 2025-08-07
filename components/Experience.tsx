import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Code, Wrench, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      icon: Code,
      title: "Web Development Member",
      organization: "IEEE FCIH",
      period: "2024 - Present",
      description: "Contributing to web development projects and participating in technical workshops. Collaborating with team members on frontend and backend development initiatives, focusing on modern web technologies and best practices.",
      responsibilities: [
        "Developed responsive web applications using React.js and modern CSS frameworks",
        "Collaborated on team projects using Git version control and Agile methodologies", 
        "Participated in code reviews and technical discussions",
        "Contributed to technical documentation and knowledge sharing sessions"
      ],
      skills: ["React.js", "JavaScript", "Team Collaboration", "Git", "Agile"],
      type: "Technical Role"
    },
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
      title: "Technical Volunteer",
      organization: "Techverse 2.0 Conference",
      period: "2024",
      description: "Volunteered at major tech conference, assisting with event coordination, technical setup, and participant support. Gained exposure to latest industry trends and networking opportunities.",
      responsibilities: [
        "Assisted with technical setup for speaker presentations and demos",
        "Provided technical support to conference attendees and participants",
        "Coordinated with speakers and helped manage technical requirements",
        "Supported event logistics and helped ensure smooth operations"
      ],
      skills: ["Event Management", "Technical Support", "Communication", "Problem Solving"],
      type: "Volunteer Work"
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
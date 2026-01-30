import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, Server, Globe, Languages } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "HTML/HTML5", "CSS/CSS3", "React", "SQL"],
      color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300"
    },
    {
      title: "Software Engineering",
      icon: Server,
      skills: ["SDLC", "UML Diagrams", "SOLID Principles"],
      color: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300"
    },
    {
      title: "Version Control",
      icon: Globe,
      skills: ["Git", "GitHub"],
      color: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300"
    },
    {
      title: "Automation & DevOps Tools",
      icon: Server,
      skills: ["Jenkins", "Ansible", "GitHub Actions", "GitLab CI"],
      color: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300"
    },
    {
      title: "Containerization & Orchestration",
      icon: Server,
      skills: ["Docker", "Docker Products", "Kubernetes"],
      color: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300"
    },
    {
      title: "Infrastructure as Code & Cloud",
      icon: Globe,
      skills: ["Terraform", "nginx", "AWS"],
      color: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300"
    },
    {
      title: "Monitoring & Observability",
      icon: Server,
      skills: ["Prometheus", "Grafana"],
      color: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300"
    }
  ];

  const languageSkills = [
    { language: "English", level: "B1 - B2" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* About Me Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">About Me</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              My name is Mahmoud Mohamed Mahmoud, a DevOps and Cloud Engineer. I'm passionate about building scalable, efficient systems that make technology work smoothly behind the scenes. As a CS student, I discovered my love for solving real problems with automation and cloud solutions. My curiosity grew from tinkering at home to scripting my first CI/CD deployment to save a project during a student tech event—a moment that inspired my path in DevOps. Since then, I've focused on developing robust, reliable infrastructures that help teams innovate confidently.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I enjoy learning new technologies, sharing knowledge, and turning challenges into seamless solutions that make a real impact.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Combining hands-on DevOps expertise with a passion for automation and cloud scalability, I turn complex infrastructure challenges into seamless, reliable, and efficient solutions. I thrive on integrating cutting-edge CI/CD practices and containerization to deliver robust platforms that empower teams to accelerate delivery and innovate with confidence.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl mb-8 text-center text-primary">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className={category.color}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Language Skills */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                Language Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {languageSkills.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                    <span className="font-medium">{lang.language}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Focus */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Current Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mastering CI/CD pipeline development and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Advanced containerization with Docker and orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cloud infrastructure automation using Terraform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>AWS services and cloud-native application deployment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/20 to-primary/5">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Future Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>AWS Solutions Architect certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Kubernetes orchestration expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Contributing to open-source DevOps projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Leading cloud transformation initiatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
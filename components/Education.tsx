import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { GraduationCap, Award, Calendar, Star } from "lucide-react";

export function Education() {
  const certifications = [
    {
      name: "DevOps Trainee",
      provider: "Digital Egyptian Pioneers Initiative",
      date: "June 2025 – December 2025",
      type: "DevOps",
      status: "Completed"
    },
    {
      name: "McKinsey Forward Program",
      provider: "McKinsey & Company",
      date: "September 2025 – November 2025",
      type: "Professional Development",
      status: "Completed"
    },
    {
      name: "Linux Essentials",
      provider: "Information Technology Institute (ITI)",
      date: "July 2025",
      type: "System Administration",
      status: "Completed"
    },
    {
      name: "Artificial Intelligence Fundamentals",
      provider: "IBM",
      date: "February 2025", 
      type: "AI/ML",
      status: "Completed"
    },
    {
      name: "Python Programming Basics",
      provider: "Information Technology Institute (ITI)",
      date: "September 2024",
      type: "Programming",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Education & Certifications</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic foundation and professional development in computer science, 
            artificial intelligence, and modern technology practices
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Academic Education */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">Bachelor of Computer Science & AI</CardTitle>
                      <CardDescription className="text-lg">Helwan University</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2 border-primary text-primary">
                        Very Good Grade
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Expected June 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    Core Focus Areas
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Computer Science Fundamentals & Algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Artificial Intelligence & Machine Learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Software Engineering & System Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Database Management & Data Structures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    Academic Achievements
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Consistent Very Good academic performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Focus on practical software development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Active participation in technology projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Research in AI and automation applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Certifications */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Professional Certifications & Training</CardTitle>
                  <CardDescription className="text-lg">
                    Industry-recognized certifications demonstrating expertise in key technologies
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-medium">Certification</TableHead>
                      <TableHead className="font-medium">Provider</TableHead>
                      <TableHead className="font-medium">Date</TableHead>
                      <TableHead className="font-medium">Category</TableHead>
                      <TableHead className="font-medium">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certifications.map((cert, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{cert.name}</TableCell>
                        <TableCell className="text-muted-foreground">{cert.provider}</TableCell>
                        <TableCell className="text-muted-foreground">{cert.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {cert.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            {cert.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/10">
            <CardHeader>
              <CardTitle className="text-xl text-center">Continuous Learning Path</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2 text-primary">2024-2026</div>
                  <div className="text-sm text-muted-foreground">Academic Journey</div>
                  <div className="text-xs text-muted-foreground mt-1">Bachelor's Degree Program</div>
                </div>
                <div>
                  <div className="text-3xl mb-2 text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications Earned</div>
                  <div className="text-xs text-muted-foreground mt-1">Professional Development</div>
                </div>
                <div>
                  <div className="text-3xl mb-2 text-primary">Ongoing</div>
                  <div className="text-sm text-muted-foreground">Skill Development</div>
                  <div className="text-xs text-muted-foreground mt-1">DevOps & Cloud Focus</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
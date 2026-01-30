import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">Get In Touch</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss DevOps opportunities, cloud projects, or just connect about technology? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Reach out directly for opportunities and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:mahmoudmohamed200488@gmail.com" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      mahmoudmohamed200488@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+201159771281" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +201159771281
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Profiles */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Professional Profiles</CardTitle>
                <CardDescription>
                  Connect with me on professional platforms and view my work
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start h-auto p-4" asChild>
                  <a href="https://github.com/MahmoudEzzat8824" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-muted-foreground">View my code repositories and projects</div>
                    </div>
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4" asChild>
                  <a href="https://linkedin.com/in/mahmoud-mohamed-510a87310" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Connect and view my professional profile</div>
                    </div>
                  </a>
                </Button>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 mt-6" asChild>
                  <a href="mailto:mahmoudmohamed200488@gmail.com">
                    <Mail className="mr-3 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/10">
              <CardHeader>
                <CardTitle className="text-xl text-center">Quick Contact</CardTitle>
                <CardDescription className="text-center">
                  Choose your preferred way to reach out
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto p-4" asChild>
                    <a href="mailto:mahmoudmohamed200488@gmail.com">
                      <div className="text-center">
                        <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-medium">Email Me</div>
                        <div className="text-sm text-muted-foreground">Best for detailed inquiries</div>
                      </div>
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4" asChild>
                    <a href="tel:+201159771281">
                      <div className="text-center">
                        <Phone className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-medium">Call Me</div>
                        <div className="text-sm text-muted-foreground">For immediate discussions</div>
                      </div>
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4" asChild>
                    <a href="https://linkedin.com/in/mahmoud-mohamed-510a87310" target="_blank" rel="noopener noreferrer">
                      <div className="text-center">
                        <Linkedin className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">Professional networking</div>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Response Time Notice */}
          <div className="mt-8">
            <Card className="text-center bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  <strong>Response Time:</strong> I typically respond to inquiries within 24-48 hours. 
                  Looking forward to connecting with you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
import './styles/globals.css'
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-medium text-lg text-primary">
              Mahmoud Mohamed Mahmoud
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#education" className="text-sm hover:text-primary transition-colors">
                Education
              </a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-3 py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Me
                </a>
                <a
                  href="#education"
                  className="block px-3 py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </a>
                <a
                  href="#experience"
                  className="block px-3 py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Homepage Hero */}
        <Hero />
        
        {/* About Me Section */}
        <Skills />
        
        {/* Education Section */}
        <Education />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg mb-4">Mahmoud Mohamed Mahmoud</h3>
              <p className="text-sm text-primary-foreground/80">
                Aspiring DevOps and Cloud Engineer passionate about building 
                scalable, reliable automation and infrastructure solutions.
              </p>
            </div>
            <div>
              <h4 className="text-base mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block hover:text-primary-foreground/80 transition-colors">
                  About Me
                </a>
                <a href="#projects" className="block hover:text-primary-foreground/80 transition-colors">
                  Projects
                </a>
                <a href="#education" className="block hover:text-primary-foreground/80 transition-colors">
                  Education
                </a>
                <a href="#contact" className="block hover:text-primary-foreground/80 transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-base mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-primary-foreground/20 px-2 py-1 rounded">Docker</span>
                <span className="bg-primary-foreground/20 px-2 py-1 rounded">Jenkins</span>
                <span className="bg-primary-foreground/20 px-2 py-1 rounded">AWS</span>
                <span className="bg-primary-foreground/20 px-2 py-1 rounded">React</span>
                <span className="bg-primary-foreground/20 px-2 py-1 rounded">Terraform</span>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-primary-foreground/80 pt-8 border-t border-primary-foreground/20">
            <p>
              © 2025 Mahmoud Mohamed Mahmoud. Built with React, TypeScript, and Tailwind CSS. 
              Designed for modern DevOps and Cloud Engineering.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

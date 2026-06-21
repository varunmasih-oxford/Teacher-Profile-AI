import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "AI Tools", id: "ai-tools" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0 font-bold text-xl tracking-tight text-primary cursor-pointer" onClick={() => scrollTo("about")} data-testid="nav-logo">
          VARUN<span className="text-foreground">.</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`nav-link-${link.id}`}
            >
              {link.name}
            </button>
          ))}
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="gap-2 shadow-md shadow-primary/20" data-testid="btn-see-documents">
                <FileText className="h-4 w-4" />
                See Documents
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Documents</DialogTitle>
                <DialogDescription>
                  Download my resume and other related documents below.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Resume</h4>
                      <p className="text-xs text-muted-foreground">Varun_Smart_Resume.pdf</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild data-testid="btn-download-resume">
                    <a href="/api/documents/resume" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="btn-mobile-menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm font-medium text-foreground hover:text-primary py-2"
                >
                  {link.name}
                </button>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="w-full gap-2 mt-4">
                    <FileText className="h-4 w-4" />
                    See Documents
                  </Button>
                </DialogTrigger>
                <DialogContent className="mx-4 w-auto">
                  <DialogHeader>
                    <DialogTitle>Documents</DialogTitle>
                    <DialogDescription>
                      Download my resume and other related documents below.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-md text-primary">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Resume</h4>
                          <p className="text-xs text-muted-foreground">Varun_Smart_Resume.pdf</p>
                        </div>
                      </div>
                      <Button variant="outline" size="icon" asChild>
                        <a href="/api/documents/resume" download>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

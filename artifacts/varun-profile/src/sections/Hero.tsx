import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Languages, Mail, Phone } from "lucide-react";

export default function Hero() {
  const qualities = [
    "Communicative", "Analytical", "Tech-Savvy", "Patient", "Student Engagement", "Leadership"
  ];

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img 
              src="/avatar.png" 
              alt="Varun" 
              className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl relative z-10 bg-muted/20"
              data-testid="hero-avatar"
            />
          </motion.div>

          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
                Hi, I'm <span className="text-primary">Varun</span>
              </h1>
              <h2 className="text-xl md:text-3xl font-medium text-muted-foreground">
                Computer Trainer <span className="text-primary/50 px-2">•</span> Data Analytics, Web Development & AI Tools
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0"
            >
              Tech-savvy professional with 6+ years of IT experience and 5+ years actively training students in computer science. Leverages AI tools and modern technologies to enhance learning outcomes and make training more practical and industry-relevant.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {qualities.map((quality) => (
                <Badge key={quality} variant="secondary" className="px-3 py-1 text-sm font-medium bg-secondary/50 hover:bg-secondary border-border/50">
                  {quality}
                </Badge>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-muted-foreground font-medium"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Rohini Sec 1, New Delhi
              </div>
              <div className="flex items-center gap-2">
                <Languages className="h-4 w-4 text-primary" />
                Hindi (Native), English (Fluent)
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/20" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

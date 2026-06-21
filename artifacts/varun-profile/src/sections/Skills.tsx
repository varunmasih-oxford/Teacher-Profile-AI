import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const technicalSkills = [
    { name: "MS Excel, MS Word, PowerPoint", level: 95 },
    { name: "HTML / CSS / JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Generative AI", level: 90 },
    { name: "Prompt Engineering", level: 95 },
  ];

  const domains = [
    "Data Analytics", "Web Development", "Excel & Power BI", "Python", "Gen AI", "Prompt Engineering"
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-primary">Skills</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive toolkit spanning data analysis, web development, and modern AI technologies.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-px flex-1 bg-border/50"></div>
              <span>Proficiency</span>
              <div className="h-px flex-1 bg-border/50"></div>
            </h3>
            
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-primary" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <div className="h-px flex-1 bg-border/50"></div>
              <span>Training Domains</span>
              <div className="h-px flex-1 bg-border/50"></div>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {domains.map((domain, index) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <h4 className="font-semibold">{domain}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

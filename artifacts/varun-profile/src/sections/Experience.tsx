import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2024 → Present",
      role: "Computer Trainer",
      company: "Oxford Software Institute, Pitampura Delhi",
      duration: "Current",
      highlights: [
        "Delivers in-person and online training on MS Word, MS Excel, MS PowerPoint, Python, HTML/CSS/JS, SQL, Power BI",
        "Builds and maintains course content, datasets, and practical assignments aligned with industry trends",
        "Integrates ChatGPT and prompt-engineering techniques into curriculum to teach AI-assisted automation",
        "Trained 200+ students, improving their command of programming and data-driven tools"
      ]
    },
    {
      year: "2023",
      role: "Programming Trainer",
      company: "Sarvodaya Polytechnic",
      duration: "1 Year",
      highlights: []
    },
    {
      year: "2021",
      role: "Programming Trainer",
      company: "Narvodaya Polytechnic",
      duration: "1.5 Years",
      highlights: []
    },
    {
      year: "2020",
      role: "Operations Associate",
      company: "Baazi Games",
      duration: "",
      highlights: []
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-primary">Experience</span></h2>
          <p className="text-muted-foreground">A journey of empowering students and professionals through practical tech education.</p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
              
              <div className="flex flex-col gap-1 mb-4">
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  <Calendar className="h-4 w-4 mr-1" />
                  {exp.year} {exp.duration && <span className="text-muted-foreground ml-2">({exp.duration})</span>}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                <h4 className="text-lg font-medium text-muted-foreground flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {exp.company}
                </h4>
              </div>

              {exp.highlights.length > 0 && (
                <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm mt-4">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed text-sm md:text-base">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

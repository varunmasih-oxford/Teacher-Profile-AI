import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Data Analytics with Excel & Power BI",
    institution: "Microsoft",
    year: "2022",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "hover:border-green-400/40",
  },
  {
    title: "Python for Data Science",
    institution: "NPTEL / IIT",
    year: "2021",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "hover:border-blue-400/40",
  },
  {
    title: "Prompt Engineering for Developers",
    institution: "DeepLearning.AI",
    year: "2023",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "hover:border-violet-400/40",
  },
  {
    title: "Generative AI Fundamentals",
    institution: "Google Cloud",
    year: "2023",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "hover:border-yellow-400/40",
  },
  {
    title: "HTML, CSS, JavaScript for Web Developers",
    institution: "Coursera / Johns Hopkins",
    year: "2020",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "hover:border-orange-400/40",
  },
  {
    title: "SQL for Data Analysis",
    institution: "Udacity",
    year: "2022",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "hover:border-cyan-400/40",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 text-primary">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is the foundation of good teaching. These credentials reflect commitment to staying current with industry standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card
                data-testid={`card-cert-${index}`}
                className={`h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group bg-card/50 backdrop-blur-sm ${cert.border}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${cert.bg} ${cert.color} group-hover:scale-110 transition-transform`}
                  >
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold leading-snug mb-3 flex-1">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span className="text-sm text-muted-foreground font-medium">
                      {cert.institution}
                    </span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${cert.color} border-current/30 gap-1`}
                    >
                      <Calendar className="h-3 w-3" />
                      {cert.year}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

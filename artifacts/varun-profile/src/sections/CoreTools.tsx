import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  FileText,
  Presentation,
  Code2,
  Palette,
  Braces,
  Terminal,
  BarChart2,
  Database,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const tools = [
  { name: "MS Excel", icon: <FileSpreadsheet className="h-7 w-7" />, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "MS Word", icon: <FileText className="h-7 w-7" />, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "MS PowerPoint", icon: <Presentation className="h-7 w-7" />, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "HTML", icon: <Code2 className="h-7 w-7" />, color: "text-orange-400", bg: "bg-orange-400/10" },
  { name: "CSS", icon: <Palette className="h-7 w-7" />, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "JavaScript", icon: <Braces className="h-7 w-7" />, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { name: "Python", icon: <Terminal className="h-7 w-7" />, color: "text-yellow-300", bg: "bg-yellow-300/10" },
  { name: "Power BI", icon: <BarChart2 className="h-7 w-7" />, color: "text-amber-400", bg: "bg-amber-400/10" },
  { name: "SQL", icon: <Database className="h-7 w-7" />, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "ChatGPT", icon: <BrainCircuit className="h-7 w-7" />, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "Prompt Engineering", icon: <Sparkles className="h-7 w-7" />, color: "text-violet-400", bg: "bg-violet-400/10" },
];

export default function CoreTools() {
  return (
    <section id="core-tools" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 text-primary">
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Core <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The complete toolkit I teach — from office productivity to modern development and data science.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              data-testid={`badge-tool-${index}`}
              className="flex items-center gap-3 bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 group cursor-default"
            >
              <span className={`${tool.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                {tool.icon}
              </span>
              <span className="font-semibold text-sm whitespace-nowrap">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

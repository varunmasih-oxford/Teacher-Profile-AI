import { motion } from "framer-motion";
import { SiChatbot, SiGithubcopilot, SiCanva, SiGooglegemini, SiNotion } from "react-icons/si";
import { Bot, Search, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AITools() {
  const tools = [
    {
      name: "ChatGPT",
      icon: <SiChatbot className="h-8 w-8" />,
      description: "Used for AI-assisted automation lessons, prompt engineering curriculum, and data analysis acceleration",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      name: "GitHub Copilot",
      icon: <SiGithubcopilot className="h-8 w-8" />,
      description: "Demonstrated in code training sessions for Python and web development",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      name: "Canva AI",
      icon: <SiCanva className="h-8 w-8" />,
      description: "For creating teaching materials and presentations",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      name: "Google Gemini",
      icon: <SiGooglegemini className="h-8 w-8" />,
      description: "For research and curriculum enrichment",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      name: "Perplexity AI",
      icon: <Search className="h-8 w-8" />,
      description: "For fact-checking and up-to-date technical references",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10"
    },
    {
      name: "Notion AI",
      icon: <SiNotion className="h-8 w-8" />,
      description: "For lesson planning and content organization",
      color: "text-stone-400",
      bg: "bg-stone-400/10"
    },
    {
      name: "Microsoft Copilot",
      icon: <Bot className="h-8 w-8" />,
      description: "Integrated into Office training (Word, Excel, PowerPoint AI features)",
      color: "text-sky-500",
      bg: "bg-sky-500/10"
    }
  ];

  return (
    <section id="ai-tools" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 text-primary">
            <BrainCircuit className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">AI Tools <span className="text-primary">Integration</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Modern workflows demand modern tools. I actively integrate these AI assistants into my curriculum to prepare students for the future.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${tool.bg} ${tool.color} group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

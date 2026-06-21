import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 7703881260",
    href: "tel:+917703881260",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
    value: "+91 7703881260",
    href: "https://wa.me/917703881260",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "masihvarun036@gmail.com",
    href: "mailto:masihvarun036@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: "Portfolio",
    value: "varunmasih.netlify.app",
    href: "https://varunmasih.netlify.app",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Rohini Sec 1, New Delhi",
    href: null,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to training opportunities, collaborations, and consulting engagements. Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/60">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        data-testid={`link-contact-${item.label.toLowerCase()}`}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/40 transition-all duration-200 group"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                          <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                          <p className="text-sm font-semibold">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                <Button
                  asChild
                  size="lg"
                  className="flex-1"
                  data-testid="button-hire-me"
                >
                  <a href="mailto:masihvarun036@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Hire Me
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  data-testid="button-whatsapp"
                >
                  <a href="https://wa.me/917703881260" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-muted-foreground/60 text-sm mt-12"
        >
          Varun · Computer Trainer · New Delhi, India
        </motion.p>
      </div>
    </section>
  );
}

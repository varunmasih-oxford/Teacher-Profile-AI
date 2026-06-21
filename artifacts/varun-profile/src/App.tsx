import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import AITools from "@/sections/AITools";
import Certifications from "@/sections/Certifications";
import CoreTools from "@/sections/CoreTools";
import Contact from "@/sections/Contact";
import { useEffect } from "react";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <Hero />
        <Skills />
        <Experience />
        <AITools />
        <Certifications />
        <CoreTools />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

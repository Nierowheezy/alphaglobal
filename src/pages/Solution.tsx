import { motion } from "framer-motion";
import { MapPin, Sprout, Handshake, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { SOLUTION_PILLARS } from "@/constants/content";
import { useState } from "react";

const iconMap = {
  "map-pin": MapPin,
  sprout: Sprout,
  handshake: Handshake,
  settings: Settings,
};

export default function SolutionPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our Solution
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A comprehensive approach to agricultural transformation through four key pillars
            </p>
          </motion.div>

          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2">
              {SOLUTION_PILLARS.map((pillar, index) => {
                const Icon = iconMap[pillar.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <Card className="h-full transition-all hover:shadow-xl">
                      <CardContent className="p-6">
                        <motion.div
                          animate={{
                            scale: hoveredIndex === index ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                          className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10"
                        >
                          <Icon className="h-7 w-7 text-primary" />
                        </motion.div>
                        <h3 className="mb-3 text-2xl font-semibold">{pillar.title}</h3>
                        <p className="mb-4 text-muted-foreground">{pillar.description}</p>
                        
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: hoveredIndex === index ? "auto" : 0,
                            opacity: hoveredIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2 border-t pt-4">
                            {pillar.details.map((detail, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                <span className="text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

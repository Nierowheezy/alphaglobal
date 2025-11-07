import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { VISION_CONTENT } from "@/constants/content";

export default function VisionPage() {
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
              {VISION_CONTENT.title}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {VISION_CONTENT.statement}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-20 max-w-6xl"
          >
            <h2 className="mb-12 text-center text-3xl font-bold">Strategic Pillars</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {VISION_CONTENT.pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-xl font-semibold">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}

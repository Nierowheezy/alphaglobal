import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { MISSION_CONTENT } from "@/constants/content";

export default function MissionPage() {
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
              {MISSION_CONTENT.title}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {MISSION_CONTENT.statement}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-20 max-w-4xl"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">Key Objectives</h2>
            <div className="space-y-6">
              {MISSION_CONTENT.objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <p className="text-lg">{objective}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}

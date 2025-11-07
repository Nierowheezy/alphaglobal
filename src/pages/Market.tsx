import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { MARKET_DATA } from "@/constants/content";

export default function MarketPage() {
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
              {MARKET_DATA.title}
            </h1>
            <p className="mb-4 text-xl text-muted-foreground">
              {MARKET_DATA.subtitle}
            </p>
            <p className="text-lg text-muted-foreground">
              {MARKET_DATA.overview}
            </p>
          </motion.div>

          {/* Market Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-20 max-w-6xl"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {MARKET_DATA.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
                        {metric.value}
                      </div>
                      <div className="mb-2 font-semibold">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {metric.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-20 max-w-4xl"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">
              Investment Highlights
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {MARKET_DATA.investmentHighlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-lg">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-20 max-w-4xl text-center"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8 md:p-12">
                <h2 className="mb-4 text-3xl font-bold">Become an Investor</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Join us in transforming Nigeria's agricultural landscape and earn competitive returns
                </p>
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}

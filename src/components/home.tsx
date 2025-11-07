import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, TrendingUp, Users, Target, Award, Globe, Sprout, BarChart3, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { SITE_CONFIG, STATS, HIGHLIGHT_CARDS } from "@/constants/content";
import { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";

function AnimatedCounter({ end, duration = 2 }: { end: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(end.replace(/[^0-9]/g, ""));
  const prefix = end.match(/[^0-9]/)?.[0] || "";

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * numericValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [numericValue, duration]);

  return <span>{prefix}{count}{end.includes("+") ? "+" : ""}{end.includes("%") ? "%" : ""}</span>;
}

const features = [
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environmentally responsible farming methods that ensure long-term soil health and ecosystem balance",
    color: "from-teal-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Advanced analytics and monitoring systems to optimize crop yields and resource allocation",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive insurance and hedging strategies to protect your agricultural investments",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Cutting-edge agricultural technology including precision farming and automated systems",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned agronomists and farm managers with decades of combined experience",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Market Access",
    description: "Direct connections to local and international markets for optimal product distribution",
    color: "from-green-500 to-teal-500"
  }
];

const process = [
  {
    step: "01",
    title: "Land Assessment",
    description: "Comprehensive evaluation of soil quality, water access, climate conditions, and infrastructure to determine agricultural potential and optimal crop selection.",
    icon: Target
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "Development of detailed farming strategy including crop rotation, resource allocation, timeline projections, and financial modeling for maximum ROI.",
    icon: BarChart3
  },
  {
    step: "03",
    title: "Implementation",
    description: "Professional execution of farming operations with modern equipment, quality inputs, and experienced personnel ensuring optimal growing conditions.",
    icon: Sprout
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description: "Continuous tracking of crop health, yield predictions, and performance metrics with real-time adjustments to maximize productivity and profitability.",
    icon: TrendingUp
  }
];

const testimonials = [
  {
    name: "Chief Adebayo Ogunlesi",
    role: "Landowner, Ogun State",
    content: "Alpha Global transformed my 50 hectares of idle land into a thriving cassava farm. The returns have exceeded my expectations, and their professional management gives me complete peace of mind.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo"
  },
  {
    name: "Mrs. Ngozi Okafor",
    role: "Investor, Lagos",
    content: "I invested in their rice farming project and have been impressed by the transparency and consistent returns. Their quarterly reports are detailed and their team is always available to answer questions.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ngozi"
  },
  {
    name: "Alhaji Musa Ibrahim",
    role: "Landowner, Kaduna",
    content: "Working with Alpha Global has been transformative. They handle everything from planting to harvest, and I receive regular updates. My land is now generating substantial income.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Musa"
  }
];

const achievements = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Leaf, value: "500+", label: "Hectares Managed" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: TrendingUp, value: "₦2.5B+", label: "Revenue Generated" }
];

export default function HomePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-emerald-50 dark:from-background dark:via-background dark:to-background">
        {/* Hero Section with Parallax */}
        <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-green-500/10 dark:from-teal-500/5 dark:via-emerald-500/5 dark:to-green-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>

          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-700 dark:text-teal-300 text-sm font-medium"
                >
                  🌱 Sustainable Agricultural Solutions
                </motion.div>

                <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                    Transforming
                  </span>
                  <br />
                  <span className="text-foreground">Idle Land Into</span>
                  <br />
                  <span className="text-teal-600 dark:text-teal-400">
                    <Typewriter
                      options={{
                        strings: ['Sustainable Wealth', 'Profitable Farms', 'Food Security', 'Green Future'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 80,
                      }}
                    />
                  </span>
                </h1>

                <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
                  We transform underutilized farmland into thriving agricultural enterprises through modern technology, expert management, and sustainable practices.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="group bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/solution">
                    <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950">
                      Explore Solutions
                    </Button>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                  {STATS.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                        <AnimatedCounter end={stat.value} />
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" 
                    alt="Modern farming" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-teal-600 dark:text-teal-400">Alpha Global</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine traditional agricultural wisdom with cutting-edge technology to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-teal-500/50 bg-gradient-to-br from-white to-teal-50/30 dark:from-card dark:to-teal-950/10">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 shadow-lg`}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-teal-600 dark:text-teal-400">Proven Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to transforming your land into a profitable agricultural asset
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-12">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-2 hover:border-teal-500/50 transition-all hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[200px_1fr] gap-0">
                        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-8 flex flex-col items-center justify-center text-white">
                          <item.icon className="w-16 h-16 mb-4" />
                          <div className="text-6xl font-bold opacity-50">{item.step}</div>
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-32 bg-teal-600 dark:bg-teal-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Track Record
              </h2>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                Numbers that speak to our commitment and success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <achievement.icon className="w-10 h-10" />
                  </div>
                  <div className="text-5xl font-bold mb-2">{achievement.value}</div>
                  <div className="text-teal-100 text-lg">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our <span className="text-teal-600 dark:text-teal-400">Clients Say</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real stories from landowners and investors who have transformed their assets with us
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-teal-500/50">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <div className="font-bold text-lg">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-teal-600 via-emerald-600 to-green-600 dark:from-teal-900 dark:via-emerald-900 dark:to-green-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Transform Your Land?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-teal-50">
                Join hundreds of successful landowners and investors who have partnered with us to create sustainable agricultural wealth
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-10 py-7 text-lg rounded-xl shadow-2xl group">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/market">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-xl">
                    View Investment Opportunities
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
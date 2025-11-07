import { motion } from "framer-motion";
import { Mail, Phone, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { SITE_CONFIG } from "@/constants/content";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Ready to transform your land? We'd love to hear from you
            </p>
          </motion.div>

          <div className="mx-auto mt-20 max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Email</h3>
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Phone</h3>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Twitter className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Twitter</h3>
                        <a
                          href={SITE_CONFIG.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Follow us on Twitter
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={submitted}>
                        {submitted ? (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center"
                          >
                            Message Sent! ✓
                          </motion.span>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

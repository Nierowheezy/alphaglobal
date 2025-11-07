import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION, SITE_CONFIG } from "@/constants/content";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-1 md:flex">
          {NAVIGATION.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                className={`relative ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t md:hidden"
          >
            <div className="container mx-auto space-y-1 px-4 py-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname === item.path
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

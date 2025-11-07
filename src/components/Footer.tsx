import { Link } from "react-router-dom";
import { Mail, Phone, Twitter } from "lucide-react";
import { SITE_CONFIG, NAVIGATION } from "@/constants/content";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Twitter className="h-4 w-4 text-muted-foreground" />
                <a
                  href={SITE_CONFIG.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Follow us on Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

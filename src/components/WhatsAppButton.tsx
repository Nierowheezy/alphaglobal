import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/content";

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.button>
  );
}

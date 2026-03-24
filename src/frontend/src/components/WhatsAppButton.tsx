import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-14 right-0 bg-navy-mid text-white text-xs font-body px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 shadow-lg">
          Chat on WhatsApp
          <div className="absolute top-full right-4 border-4 border-transparent border-t-navy-mid" />
        </div>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ background: "#25D366" }}
          aria-label="Chat on WhatsApp"
          data-ocid="whatsapp.button"
        >
          <MessageCircle size={26} className="text-white" fill="white" />
        </a>
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "#25D366" }}
        />
      </div>
    </motion.div>
  );
}

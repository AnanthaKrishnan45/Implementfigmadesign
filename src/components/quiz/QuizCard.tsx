import React from "react";
import { motion } from "motion/react";
import { cn } from "../ui/utils";

interface QuizCardProps {
  children: React.ReactNode;
  className?: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 relative",
        className
      )}
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)",
        boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.05)"
      }}
    >
        {/* Decorative elements to match the 'Test Your Knowledge' vibe */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500" />
      <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
        {children}
      </div>
    </motion.div>
  );
};

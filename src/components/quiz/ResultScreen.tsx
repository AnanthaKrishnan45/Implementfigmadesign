import React from "react";
import { Button } from "../ui/button";
import { QuizCard } from "./QuizCard";
import { motion } from "motion/react";

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  
  // Circle configuration
  const radius = 80;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <QuizCard>
      <div className="flex flex-col items-center text-center space-y-8 w-full">
        <div className="text-center pb-2">
            <h3 className="text-lg font-bold text-blue-500 uppercase tracking-widest opacity-80">Test Your Knowledge</h3>
        </div>

        <h2 className="text-3xl font-serif font-bold text-slate-800">
          Quiz Completed!
        </h2>

        <div className="relative flex items-center justify-center">
            {/* SVG Circle Progress */}
            <svg
                height={radius * 2}
                width={radius * 2}
                className="transform -rotate-90"
            >
                <circle
                    stroke="#e2e8f0"
                    strokeWidth={stroke}
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <motion.circle
                    stroke="#3b82f6"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    strokeLinecap="round"
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
                <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-4xl font-bold text-slate-800"
                >
                    {percentage}%
                </motion.span>
            </div>
        </div>

        <div className="space-y-2">
            <p className="text-xl text-slate-600 font-medium">
                You scored {score} out of {total}
            </p>
            <p className="text-slate-400">
                {percentage === 100 ? "Perfect score! Outstanding!" : 
                 percentage >= 70 ? "Great job! Keep it up." : 
                 "Keep practicing, you'll get there!"}
            </p>
        </div>

        <div className="pt-6 w-full max-w-xs">
            <Button 
                onClick={onRestart} 
                className="w-full bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 py-6 text-lg rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
            >
                Try Again
            </Button>
        </div>
      </div>
    </QuizCard>
  );
};

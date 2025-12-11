import React from "react";
import { Button } from "../ui/button";
import { QuizCard } from "./QuizCard";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <QuizCard>
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full opacity-50" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 tracking-tight">
            Test Your Knowledge
          </h1>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            Challenge yourself with our frontend development quiz.
          </p>
        </div>

        <div className="pt-4">
            <Button 
                onClick={onStart} 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
                Start Quiz
            </Button>
        </div>
      </div>
    </QuizCard>
  );
};

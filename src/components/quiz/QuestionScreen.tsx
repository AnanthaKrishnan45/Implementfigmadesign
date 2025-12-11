import React, { useState } from "react";
import { Button } from "../ui/button";
import { QuizCard } from "./QuizCard";
import { Question } from "../../lib/quiz-data";
import { cn } from "../ui/utils";
import { CheckCircle2, Circle } from "lucide-react";

interface QuestionScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onNext: (answerIndex: number) => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onNext,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption !== null) {
      onNext(selectedOption);
      setSelectedOption(null); // Reset for next question usually, but component might unmount
    }
  };

  return (
    <QuizCard>
      <div className="w-full flex flex-col space-y-6">
        {/* App Header */}
        <div className="text-center pb-2">
            <h3 className="text-lg font-bold text-blue-500 uppercase tracking-widest opacity-80">Test Your Knowledge</h3>
        </div>

        {/* Header with Progress */}
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-end text-sm text-slate-400 font-medium uppercase tracking-wider">
                <span>Question {currentIndex + 1}</span>
                <span>{totalQuestions} total</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 ease-out"
                    style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
            </div>
        </div>

        {/* Question */}
        <div className="py-4">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-slate-800 leading-tight text-center">
            {question.question}
            </h2>
        </div>

        {/* Options */}
        <div className="grid gap-3">
            {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                return (
                    <button
                        key={index}
                        onClick={() => setSelectedOption(index)}
                        className={cn(
                            "group relative flex items-center p-4 rounded-xl border-2 transition-all duration-200 text-left outline-none focus:ring-2 focus:ring-blue-200",
                            isSelected 
                                ? "border-blue-500 bg-blue-50/50 shadow-md" 
                                : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                        )}
                    >
                        <div className={cn(
                            "mr-4 flex-shrink-0 transition-colors",
                            isSelected ? "text-blue-500" : "text-slate-300 group-hover:text-blue-400"
                        )}>
                            {isSelected ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                        </div>
                        <span className={cn(
                            "text-lg font-medium",
                            isSelected ? "text-blue-700" : "text-slate-600 group-hover:text-slate-800"
                        )}>
                            {option}
                        </span>
                    </button>
                )
            })}
        </div>

        {/* Footer */}
        <div className="pt-6 flex justify-center">
            <Button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={cn(
                    "px-10 py-6 text-lg rounded-full shadow-lg transition-all duration-300",
                    selectedOption !== null 
                        ? "bg-slate-900 hover:bg-slate-800 text-white transform hover:-translate-y-1" 
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                )}
            >
                Next Question
            </Button>
        </div>
      </div>
    </QuizCard>
  );
};

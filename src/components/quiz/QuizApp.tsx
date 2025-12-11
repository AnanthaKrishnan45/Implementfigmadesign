import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { StartScreen } from "./StartScreen";
import { QuestionScreen } from "./QuestionScreen";
import { ResultScreen } from "./ResultScreen";
import { quizQuestions } from "../../lib/quiz-data";

type QuizStatus = 'start' | 'quiz' | 'result';

export const QuizApp: React.FC = () => {
  const [status, setStatus] = useState<QuizStatus>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setStatus('quiz');
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStatus('result');
    }
  };

  const restartQuiz = () => {
    setStatus('start');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-200/40 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl z-10 flex justify-center">
        <AnimatePresence mode="wait">
          {status === 'start' && (
            <StartScreen key="start" onStart={startQuiz} />
          )}
          
          {status === 'quiz' && (
            <QuestionScreen
              key={`question-${currentQuestionIndex}`}
              question={quizQuestions[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={quizQuestions.length}
              onNext={handleAnswer}
            />
          )}

          {status === 'result' && (
            <ResultScreen
              key="result"
              score={score}
              total={quizQuestions.length}
              onRestart={restartQuiz}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

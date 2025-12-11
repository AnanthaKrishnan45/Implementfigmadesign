export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<script>", "<style>", "<link>"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background-image"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "How do you select an element with id 'demo'?",
    options: ["#demo", ".demo", "demo", "*demo"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    correctAnswer: 1,
  },
];

import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "q1",
    question: "¿Cuáles son lenguajes de programación?",
    options: [
      { id: "a", text: "JavaScript" },
      { id: "b", text: "HTML" },
      { id: "c", text: "CSS" },
      { id: "d", text: "Python" },
    ],
    correctAnswers: ["a", "d"],
    allowMultiple: true,
  },
  {
    id: "q2",
    question: "¿React es una librería o un framework?",
    options: [
      { id: "a", text: "Framework" },
      { id: "b", text: "Librería" },
    ],
    correctAnswers: ["b"],
    allowMultiple: false,
  },
]
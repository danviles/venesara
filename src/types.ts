export type AnswerOption = {
  id: string
  text: string
}

export type Question = {
  id: string
  question: string
  options: AnswerOption[]
  correctAnswers: string[]
  allowMultiple: boolean
}
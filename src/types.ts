export type AnswerOption = {
  id: string
  text: string
}

export type Question = {
  id: string
  question: string
  img?: string
  options: AnswerOption[]
  correctAnswers: string[]
  allowMultiple: boolean
}
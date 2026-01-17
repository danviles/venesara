import { useState } from "react"
import type { Question as QuestionType } from "../types"

type Props = {
  data: QuestionType
  onAnswer: (selected: string[]) => void
}

export const Question = ({ data, onAnswer }: Props) => {
  const [selected, setSelected] = useState<string[]>([])

  const toggleOption = (id: string) => {
    if (data.allowMultiple) {
      setSelected(prev =>
        prev.includes(id)
          ? prev.filter(x => x !== id)
          : [...prev, id]
      )
    } else {
      setSelected([id])
    }
  }

  return (
    <div className="screen">
      <h2>{data.question}</h2>

      <div className="options">
        {data.options.map(option => (
          <button
            key={option.id}
            className={selected.includes(option.id) ? "selected" : ""}
            onClick={() => toggleOption(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>

      <button
        disabled={selected.length === 0}
        onClick={() => onAnswer(selected)}
      >
        Confirmar
      </button>
    </div>
  )
}
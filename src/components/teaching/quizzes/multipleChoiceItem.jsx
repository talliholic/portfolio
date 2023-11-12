import { useState } from "react"
import Choice from "./choice"

export default function MultipleChoiceItem({
  question,
  options,
  itemId,
  updateAnswers,
  quizFinished,
  answerCorrect,
}) {
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState()

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, i) => (
        <Choice
          itemId={itemId}
          updateAnswers={updateAnswers}
          key={option}
          index={i}
          setSelectedChoiceIndex={setSelectedChoiceIndex}
          selected={selectedChoiceIndex == i}
          quizFinished={quizFinished}
          answerCorrect={answerCorrect}
        >
          {option}
        </Choice>
      ))}
    </div>
  )
}

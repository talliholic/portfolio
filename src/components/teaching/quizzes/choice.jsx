import { useEffect, useState } from "react"
import styles from "./choice.module.css"

export default function Choice({
  children,
  index,
  setSelectedChoiceIndex,
  selected,
  itemId,
  updateAnswers,
  quizFinished,
  answerCorrect,
}) {
  const styleChoice = () => {
    if (selected) return styles.selected
    return styles.notSelected
  }

  const [choiceStyle, setChoiceStyle] = useState()

  const handleClick = () => {
    setSelectedChoiceIndex(index)
    updateAnswers(itemId, children)
  }

  useEffect(() => setChoiceStyle(styleChoice()), [])

  useEffect(() => setChoiceStyle(styleChoice()), [selected])

  useEffect(() => {
    if (quizFinished && selected) {
      if (answerCorrect(itemId, children)) setChoiceStyle(styles.rightAnswer)
      else setChoiceStyle(styles.wrongAnswer)
    }
  }, [quizFinished])

  return (
    <div onClick={handleClick} className={choiceStyle}>
      {children}
    </div>
  )
}

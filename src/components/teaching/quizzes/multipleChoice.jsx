import { useEffect, useState } from "react"
import MultipleChoiceItem from "./multipleChoiceItem"
import styles from "./multipleChoice.module.css"

export default function MultipleChoice({ quiz }) {
  const [answers, setAnswers] = useState()
  const [quizFinished, setQuizFinished] = useState(false)
  const [finalScore, setFinalScore] = useState()

  const setUpAnswers = () => {
    const mappedQuiz = quiz.questions.map(item => ({
      id: item.id,
      question: item.question,
      correctAnswer: item.correctAnswer,
    }))
    setAnswers(mappedQuiz)
  }

  const updateAnswers = (id, answer) => {
    const selectedAnswer = answers.find(answer => answer.id == id)
    const otherAnswers = answers.filter(answer => answer.id != id)
    selectedAnswer.answer = answer
    if (answer == selectedAnswer.correctAnswer) selectedAnswer.correct = true
    else selectedAnswer.correct = false
    otherAnswers.push(selectedAnswer)
    otherAnswers.sort((a, b) => a.id - b.id)
    setAnswers(otherAnswers)
  }

  const answersCompleted = () => answers.every(answer => answer.answer)

  const handleCheck = () => {
    if (!answersCompleted()) alert("You must answer all questions!")
    else {
      setQuizFinished(true)
      gradeQuiz()
    }
  }

  const answerCorrect = (id, answer) => {
    const answerSelected = answers.find(answer => answer.id == id)
    if (answer == answerSelected.correctAnswer) return true
    return false
  }

  useEffect(() => {
    setUpAnswers()
  }, [])

  const gradeQuiz = () => {
    let score = 0
    answers.forEach(answer => {
      if (answer.correct) score++
    })
    setFinalScore(Math.round((score * 100) / answers.length))
  }

  const styleFinalScore = () => {
    if (finalScore >= 75) return styles.successful
    if (finalScore <= 75) return styles.failure
    return styles.defaultFinalScore
  }

  return (
    <div className={styles.quiz}>
      <h2>{quiz.type}</h2>
      {quiz.questions.map(question => (
        <MultipleChoiceItem
          itemId={question.id}
          key={question.question}
          question={question.question}
          options={question.options}
          updateAnswers={updateAnswers}
          answerCorrect={answerCorrect}
          quizFinished={quizFinished}
        />
      ))}
      <div className={styleFinalScore()}>
        {finalScore != undefined && `Your score is ${finalScore}.`}
      </div>
      {!quizFinished && (
        <button className={styles.checkButton} onClick={handleCheck}>
          Check
        </button>
      )}
    </div>
  )
}

import { useParams } from "react-router-dom"
import MultipleChoice from "../../../components/teaching/quizzes/multipleChoice"
import lessons from "../../../data/teaching/ict/lessons"
import Modal from "../../../components/modal"
import { useState } from "react"
import styles from "./lesson.module.css"

export default function ICTLesson() {
  const { id } = useParams()
  const lesson = lessons.find(lesson => lesson.id == id)
  const [youtubeQuizOpen, setYoutubeQuizOpen] = useState(false)

  return (
    <main className={styles.lesson}>
      <section>
        <h1>{lesson.title}</h1>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + lesson.youtubeQuiz.embed}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <button
          className={styles.button}
          onClick={() => setYoutubeQuizOpen(true)}
        >
          Do Quiz
        </button>
      </section>
      <Modal
        open={youtubeQuizOpen}
        onClose={() => setYoutubeQuizOpen(false)}
        title="YouTube Quiz"
      >
        <MultipleChoice quiz={lesson.youtubeQuiz} />
      </Modal>
    </main>
  )
}

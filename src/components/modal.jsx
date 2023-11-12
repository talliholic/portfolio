import { createPortal } from "react-dom"
import styles from "./modal.module.css"

export default function Modal({ title, children, onClose, open }) {
  if (!open) return null

  return createPortal(
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <button onClick={onClose}>X</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  )
}

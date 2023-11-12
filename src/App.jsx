import { BrowserRouter, Routes, Route } from "react-router-dom"
import ICTLesson from "./pages/teaching/ict/lesson"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/teaching/ict/lesson/:id" element={<ICTLesson />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

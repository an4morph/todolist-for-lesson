import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { FormPage } from "./pages/form"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

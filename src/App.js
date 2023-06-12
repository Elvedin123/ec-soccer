import { Route, Routes } from "react-router-dom"
import LandingPage from "./screens/landingpage"
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  )
}

export default App

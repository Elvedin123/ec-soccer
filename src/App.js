import { Route, Routes } from "react-router-dom"
import LandingPage from './screens/Landing page/landingpage'
import About from "./components/About/about.jsx"
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App

import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="container">
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
  </Router>
  </div>
  )
}
export default App

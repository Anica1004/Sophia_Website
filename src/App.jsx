import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="container">
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />

    </Routes>
  </Router>
  </div>
  )
}
export default App

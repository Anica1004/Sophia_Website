import './App.css'
import NavBar from './components/NavBar'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="container">
    <Router>
    {/* This stays constant on all pages */}
    <NavBar />

    {/* This changes depending on the route */}
    <Routes>
      {/* 👇 "/" route = your home page */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </Router>
  </div>
  )
}
export default App

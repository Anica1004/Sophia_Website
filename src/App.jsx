import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CGAnimated from './pages/CGAnimated'
import FineArt from './pages/FineArts'
import Photography from './pages/Photography'
function App() {
  

  return (
    <div>
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/portfolio/cganimatedfilm" element={<CGAnimated/>}/>
      <Route path="/portfolio/finearts" element={<FineArt/>}/>
      <Route path="/portfolio/photography" element={<Photography/>}/>
    </Routes>
  </Router>
  </div>
  )
}
export default App

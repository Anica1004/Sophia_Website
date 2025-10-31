import './App.css'
import NavBar from './components/NavBar'
import Button from './components/Button'
import DemoReel from './components/DemoReel'

function App() {
  

  return (
      <div className="container">
        <NavBar/>
        <div className = "content">
        <Button title="CLICK TO VIEW ON VIMEO"/>

        <div className = "demo-reels">
          <DemoReel link="https://player.vimeo.com/video/806201784?h=ee34fd0feb" title="texture + lookdev demoreel"/>
          <DemoReel link="https://player.vimeo.com/video/829171109?h=f7c951bad6" title="personal compositing reel"/>
          <DemoReel link="https://player.vimeo.com/video/1011143104?h=3894bcfb5c" title="professional lighting and compositing reel"/>
          <DemoReel link="https://www.youtube.com/embed/3ib-F2JUpUo?si=Er79SOhpxjhx17DV" title="student short film"/>
        </div>
        </div>
      </div>
  )
}
export default App

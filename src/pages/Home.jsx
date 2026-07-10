import Button from '../components/Button'
import DemoReel from '../components/DemoReel'
import '../pages/Home.css'

export default function Home(){

    return (
        <div className="container page-enter">
        <div className = "content">

        <div className = "links">
        <Button title="CLICK TO VIEW RESUME" width = {3} height = {2}  link="/resume.pdf"/>
        <Button title="CLICK TO VIEW ON VIMEO" width = {3}  height = {2} link="https://vimeo.com/806201784"/>
        </div>
        <div className = "demo-reels">
          <DemoReel link="https://player.vimeo.com/video/806201784?h=ee34fd0feb" title="PERSONAL TEXTURE & LOOKDEV REEL"/>
          <DemoReel link="https://www.youtube.com/embed/WehkIlTBwiM?si=hMU9lwff-Vq9XuXn" title="PROFESSIONAL TEXTURE & LOOKDEV REEL"/>
          <DemoReel link="https://player.vimeo.com/video/829171109?h=f7c951bad6" title="PERSONAL COMPOSITING REEL"/>
          <DemoReel link="https://player.vimeo.com/video/1011143104?h=3894bcfb5c" title="PROFESSIONAL LIGHTING AND COMPOSITING REEL"/>
          <DemoReel link="https://www.youtube.com/embed/3ib-F2JUpUo?si=Er79SOhpxjhx17DV" title="STUDENT SHORT FILM"/>
        </div>
        </div>
      </div>
    ); 
}
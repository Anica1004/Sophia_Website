import documentOfLife from '../assets/DocumentOfLife/1.png'
import './CGAnimated.css'
import LearnMore from '../components/LearnMore'
import DemoReel from '../components/DemoReel'
import FadeInOnScroll from "../components/FadeInOnScroll";



// Images.. TODO: Will use database to clean this up

import img2 from '../assets/DocumentOfLife/2.png'
import img3 from '../assets/DocumentOfLife/3.png'
import img4 from '../assets/DocumentOfLife/4.png'
import img5 from '../assets/DocumentOfLife/5.png'
import img6 from '../assets/DocumentOfLife/6.png'
import img7 from '../assets/DocumentOfLife/7.png'
import img8 from '../assets/DocumentOfLife/8.png'
import img9 from '../assets/DocumentOfLife/9.png'
import img10 from '../assets/DocumentOfLife/10.png'
import img11 from '../assets/DocumentOfLife/11.png'

const documentImages1 = [
    documentOfLife,
    img3,
    img5,
    img7,
    img10,
    img11,
  ];
  
  const documentImages2 =[
    img2,
    img4,
    img6,
    img8,
    img9,
  ]




export default function CGAnimated(){
    return (<div className="page-enter">
        
        
        <div className="banner">
        <img className="banner-image" src={documentOfLife} alt="Banner"/>
        <div className="banner-text page-enter">
        <h1>Documents of Life</h1>
        <p>is a CG Animated short I directed and produced in my fourth year of Emily Carr University of Art + Design.</p>
        </div>
        </div>
       <div className="awards page-enter">
            <div className="component">
                <div className="germany-award">
                <p>This film has been screened in <strong>up-and-coming 2023 International Film Festival Hannover in Germany</strong></p>
                <LearnMore title="Learn more" width={6} height={0.4} link="http://festival.up-and-coming.de/en/film_festival_2023/film_program/filme_a-z_international_competition.1169.0.1.html?tx_uacfilm_list[film]=5972&tx_uacfilm_list[controller]=Film&cHash=f46d7fa9ec66ce6354041c7e2243ec23"/>
                </div>

                <div className="portugal-award">
                <p>This film has been screened in <strong>CINANIMA International Animated Film Festival</strong> of Espinho, <strong>Portugal</strong></p>
                <LearnMore title="Learn more" width={6} height={0.4} link="https://www.sophiasuminmok.com/s/Declaration_screening-Documents-of-Life_2025-8c3l.pdf"/>
                </div>

            </div>
            <div className="component">
                <p>Sophia (Sumin) Mok (BMA) won the <strong>Sophie Burnett Memorial Award</strong> and an honourable mention for the The President’s Media Awards for Excellence (Best in 3D Computer Animation) for their project, Documents of Life.</p>
                <LearnMore title="Learn more" width={6} height={0.4} link="https://www.ecuad.ca/news/2023/the-show-student-awards-2023"/>
            </div>
        </div>

        <div className="synopsis">
            <FadeInOnScroll>
            <h2>SYNOPSIS</h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <p>In an unattended kitchen, objects levitate and arrange by themselves. The moving objects reveal details about the kitchen owner and the cause of the supernatural phenomenon. </p>
            </FadeInOnScroll>
            <DemoReel link="https://www.youtube.com/embed/3ib-F2JUpUo?si=0FjG75hUNB_10gaT"/>
        </div>

        <div className="stills">
        <FadeInOnScroll>
         <h2>STILLS</h2>
         </FadeInOnScroll>

         <div className="parts">
            <div className='part'>
            {documentImages1.map((src, index) => (
                <FadeInOnScroll key={index}>
                <img key={index} src = {src} alt={`Document frame ${index + 2}`}  />
                </FadeInOnScroll>
            ))}
           </div>
           <div className='part'>
            {documentImages2.map((src, index) => (
                 <FadeInOnScroll key={index}>
                <img key={index} src = {src} alt={`Document frame ${index + 2}`}  />
                </FadeInOnScroll>
            ))}
           </div>
           </div>
           
        </div>
      
    </div>);
}
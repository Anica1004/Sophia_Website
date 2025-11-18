import React, { useEffect } from "react";
import NextButton from '../components/NextButton';
import img1 from '../assets/Photography/1.png';
import img2 from '../assets/Photography/2.png';
import img3 from '../assets/Photography/3.png';
import img4 from '../assets/Photography/4.png';
import img5 from '../assets/Photography/5.png';
import img6 from '../assets/Photography/6.png';
import img7 from '../assets/Photography/7.png';
import img8 from '../assets/Photography/8.png';
import img9 from '../assets/Photography/9.png';
import img10 from '../assets/Photography/10.png';
import img11 from '../assets/Photography/11.png';
import img12 from '../assets/Photography/12.png';
import img13 from '../assets/Photography/13.png';
import img14 from '../assets/Photography/14.png';
import img15 from '../assets/Photography/15.png';
import './Photography.css'

const col1 = [img1, img2, img3, img4, img5]
const col2 = [img6, img7, img8, img9, img10]
const col3 = [img11, img12, img13, img14, img15]

export default function Photography(){
    useEffect(() => {
        const blocks = document.querySelectorAll(".fade-in");
    
        // reset (in case of re-entering the page)
        blocks.forEach((el) => el.classList.remove("visible"));
    
        // force reflow so transitions replay
        if (blocks.length) {
          // this line just reads layout to "reset" CSS transitions
          // eslint-disable-next-line no-unused-expressions
          blocks[0].offsetHeight;
        }
    
        // add .visible back with stagger
        blocks.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add("visible");
          }, i * 25); 
        });
      }, []); // runs when this component mounts
    
    return(
        <div>
        <div className="photography">
            <div className="pic-batch">
                {col1.map((src, index) => (
                    <div className="fade-in" key={`c1-${index}`}>
                    <img src={src} key={index}/>
                    </div>
                ))}
            </div>
            <div className="pic-batch">
                {col2.map((src, index) => (
                    <div className="fade-in" key={`c2-${index}`}>
                    <img src={src} key={index}/>
                    </div>
                ))}
            </div>
            <div className="pic-batch">
                {col3.map((src, index) => (
                    <div className="fade-in" key={`c3-${index}`}>
                    <img src={src} key={index}/>
                    </div>
                ))}
            </div>
        </div>
        <div className="backwards">
                 <NextButton title="Fine Arts" isRight={false} path="/portfolio/finearts"/>
            </div>
        </div>
    )
}


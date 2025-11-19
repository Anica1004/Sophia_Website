import React, { useEffect, useState } from "react";
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
import { client, urlFor } from "../sanityClient";

const col1 = [img1, img2, img3, img4, img5]
const col2 = [img6, img7, img8, img9, img10]
const col3 = [img11, img12, img13, img14, img15]

export default function Photography(){
    const [columns, setColumns] = useState({
        1: [],
        2: [],
        3: [],
      });
    
      useEffect(() => {
        async function loadImages() {
          const images = await client.fetch(`
            *[_type == "fineArtPiece" && category == "photo"]
            | order(order asc){
              _id,
              title,
              image,
              column
            }
          `);
    
          const cols = { 1: [], 2: [], 3: [], 4: [] };
    
          images.forEach((img) => {
            const col = img.column ?? 1;
            if (!cols[col]) cols[col] = [];
            cols[col].push(img);
          });
    
          setColumns(cols);
        }
    
        loadImages();
      }, []);


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
      }, [columns]); // runs when this component mounts
    
    return(
        <div>
        <div className="photography">
          {[1, 2, 3].map((col) => (
            <div className="pic-batch" key={col}>
              {columns[col].map((item, index) => (
                <div className="fade-in" key={item._id}>
                  <img
                    src={urlFor(item.image).width(1200).url()}
                    alt={item.title || "Photography"}
                  />
                </div>
              ))}
            </div>
          ))}  
        </div>
        <div className="backwards">
                 <NextButton title="Fine Arts" isRight={false} path="/portfolio/finearts"/>
            </div>
        </div>
    )
}


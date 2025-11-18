import React, { useEffect } from "react";
import img1 from "../assets/FineArt/1.png";
import img2 from "../assets/FineArt/2.png";
import img3 from "../assets/FineArt/3.png";
import img4 from "../assets/FineArt/4.png";
import img5 from "../assets/FineArt/5.png";
import img6 from "../assets/FineArt/6.png";
import img7 from "../assets/FineArt/7.png";
import img8 from "../assets/FineArt/8.png";
import img9 from "../assets/FineArt/9.png";
import "./FineArts.css";
import NextButton from "../components/NextButton";

const col1 = [img1, img2, img3];
const col2 = [img4, img5];
const col3 = [img6, img7];
const col4 = [img8, img9];

export default function FineArt() {
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

  return (
    <div>
      <div className="fine-art">
        <div className="col">
          {col1.map((src, index) => (
            <div className="fade-in" key={`c1-${index}`}>
              <img
                src={src}
                alt={`Column 1 Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="col">
          {col2.map((src, index) => (
            <div className="fade-in" key={`c2-${index}`}>
              <img
                src={src}
                alt={`Column 2 Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="col">
          {col3.map((src, index) => (
            <div className="fade-in" key={`c3-${index}`}>
              <img
                src={src}
                alt={`Column 3 Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="col">
          {col4.map((src, index) => (
            <div className="fade-in" key={`c4-${index}`}>
              <img
                src={src}
                alt={`Column 4 Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="two-buttons">
        <NextButton
          title="CG Animated Short : Documents of Life"
          isRight={false}
          path="/portfolio/cganimatedfilm"
        />
        <NextButton
          title="Photography"
          isRight={true}
          path="/portfolio/photography"
        />
      </div>
    </div>
  );
}

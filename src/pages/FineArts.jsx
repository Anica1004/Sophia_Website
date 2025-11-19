import React, { useEffect, useState } from "react";
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
import { client, urlFor } from "../sanityClient";

const col1 = [img1, img2, img3];
const col2 = [img4, img5];
const col3 = [img6, img7];
const col4 = [img8, img9];

export default function FineArt() {
  const [columns, setColumns] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
  });

  useEffect(() => {
    async function loadImages() {
      const images = await client.fetch(`
        *[_type == "fineArtPiece" && category == "fine-art"]
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
  }, [columns]); 

  return (
    <div>
      <div className="fine-art">
          {[1, 2, 3, 4].map((col) => (
            <div className="col" key={col}>
              {columns[col].map((item, index) => (
                <div className="fade-in" key={item._id}>
                  <img
                    src={urlFor(item.image).width(1200).url()}
                    alt={item.title || "Fine Art Piece"}
                  />
                </div>
              ))}
            </div>
          ))}
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

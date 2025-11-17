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
  return (
    <div>
      <div className="fine-art">
        <div className="col">
          {col1.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Column 1 Image ${index + 1}`}
            ></img>
          ))}
        </div>
        <div className="col">
          {col2.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Column 2 Image ${index + 1}`}
            ></img>
          ))}
        </div>
        <div className="col">
          {col3.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Column 3 Image ${index + 1}`}
            ></img>
          ))}
        </div>

        <div className="col">
          {col4.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Column 4 Image ${index + 1}`}
            ></img>
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

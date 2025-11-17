import { useNavigate } from "react-router-dom";
import "./NextButton.css";

export default function NextButton({ title, path, isRight = true }) {
  const navigate = useNavigate();

  return (
    <div className="button-container">
      <div className="next" onClick={() => navigate(path)}>
        {title}
      </div>
        {isRight ? (
         <span className="thin-arrow">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
           <path d="M8 4l8 8-8 8" stroke="black" strokeWidth="1" />
         </svg>
       </span>
        ) : (
            <span className="thin-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M16 4l-8 8 8 8" stroke="black" strokeWidth="1" />
            </svg>
          </span>
        )}
      </div>
  );
}

import './LearnMore.css'


export default function LearnMore({title, width="1", height="1", link=""}){
  const style = { 
    padding: `${height}rem ${width}rem` 
  };
    return (
        <a
          style = {style}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="LearnMore"
        >
           <span>{title}</span> 
        </a>
    ); 
}
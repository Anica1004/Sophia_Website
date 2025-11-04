import './Button.css'


export default function Button({title, width, height="1", link=""}){
  const style = { 
    padding: `${height}rem ${width}rem` 
  };
    return (
        <a
          style = {style}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          {title}
        </a>
    ); 
}
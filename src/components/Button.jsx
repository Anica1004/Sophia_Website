import './Button.css'


export default function Button({title, width}){
  const style = { 
    padding: `1rem ${width}rem` 
  };
    return (
        <a
          style = {style}
          href="https://vimeo.com/806201784"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          {title}
        </a>
    ); 
}
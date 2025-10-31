import './Button.css'


export default function Button({title}){
    return (
        <a
          href="https://vimeo.com/806201784"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          {title}
        </a>
    ); 
}
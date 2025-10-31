import './NavBar.css'
import { FaLinkedin } from 'react-icons/fa';

export default function NavBar(){

    return (
       <nav>
        <h1>Sophia (Sumin) Mok</h1>
        <ul className = "nav-links">
            <li><a className = "link" href = "/">Demo Reel</a></li>
            <li><a className = "link" href = "#TBD">Portfolio</a></li>
            <li><a className = "link" href = "#TBD">Resume</a></li>
            <li><a className = "link" href = "#TBD">Articles</a></li>
            <li>
        <a
            href="https://www.linkedin.com/in/sophiasuminmok"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-icon"
        >
            in
        </a>
        </li>
        </ul>
       </nav>
    ); 

}
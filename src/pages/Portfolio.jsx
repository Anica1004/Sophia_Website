import documentOfLife from '../assets/DocumentOfLife/1.png'
import fineArt from '../assets/FineArt/4.png'
import Project from '../components/Project'
import photography from '../assets/Photography/1.png'
import './Portfolio.css'
import { useNavigate } from "react-router-dom";

export default function Portfolio(){
    const navigate = useNavigate();

    return (
    <div className="project-container">
    <Project title="CG Animated Short: Documents of Life" image={documentOfLife}
    onClick={() => navigate("cganimatedfilm")}/>
    <Project title="Fine Arts" image={fineArt}
    onClick={() => navigate("finearts")}/>
    <Project title="Photography" image={photography}
    onClick={() => navigate("photography")}/>
    </div>
    );
}
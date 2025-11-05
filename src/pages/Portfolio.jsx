import documentOfLife from '../assets/DocumentOfLife/1.png'
import fineArt from '../assets/FineArt/4.png'
import Project from '../components/Project'
import photography from '../assets/Photography/1.png'
import './Portfolio.css'
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
const containerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1, 
        transition: {
            when: "beforeChildren",  
            delay: 0.3,    
            delayChildren: 0.05, 
            staggerChildren: 0.08, 
        }
    }
}

const itemVariants = {
    hidden: {opacity:0, y:16}, 
    show: {
        opacity: 1, 
        y: 0, 
        transition: {duration: 0.28, ease: "easeOut"}
    }, 
    exit: {opactiy: 0, y: -8, transition: {duration: 0.2, ease: "easeIn"}}
}

export default function Portfolio(){
    const navigate = useNavigate();





    return (
    <motion.div className="project-container" variants={containerVariants} initial="hidden" animate="show" exit="exit">
    
    <motion.div variants={itemVariants}>
    <Project title="CG Animated Short: Documents of Life" image={documentOfLife}
    onClick={() => navigate("cganimatedfilm")}/>
    </motion.div>

    <motion.div variants={itemVariants}>
    <Project title="Fine Arts" image={fineArt}
    onClick={() => navigate("finearts")}/>
    </motion.div>
    
    <motion.div variants={itemVariants}>
    <Project title="Photography" image={photography}
    onClick={() => navigate("photography")}/>
    </motion.div>

    </motion.div>
    );
}
import './DesktopNavBar.css';
import { motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      delayChildren: 0.01,
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function DesktopNavBar() {
  const location = useLocation();

  return (
    <motion.nav
      key={location.pathname}             
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="navbar"
    >
      <motion.h1 variants={itemVariants}>Sophia (Sumin) Mok</motion.h1>

      <ul className="nav-links">
        <motion.li variants={itemVariants}>
          <NavLink to="/" className={({isActive}) => (isActive? "link active": "link")}>Demo Reel</NavLink>
        </motion.li>
        <motion.li variants={itemVariants}>
          <NavLink to="/portfolio" className={({isActive}) => (isActive? "link active": "link")}>Portfolio</NavLink>
        </motion.li>
        <motion.li variants={itemVariants}>
          <NavLink to="/resume" className={({isActive}) => (isActive? "link active": "link")}>Resume</NavLink>
        </motion.li>
        <motion.li variants={itemVariants}>
          <NavLink to="/articles" className={({isActive}) => (isActive? "link active": "link")}>Articles</NavLink>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/sophiasuminmok"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            in
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

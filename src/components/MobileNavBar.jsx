import './MobileNavBar.css';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  // lock body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <>
      {/* top bar (always visible on mobile) */}
      <header className="mnav-bar">
        <div className="mnav-brand">Sophia (Sumin) Mok</div>
        <button
          className="mnav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      {/* full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mnav-overlay"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* overlay header (brand + X) */}
            <div className="mnav-overlay-top">
              <div className="mnav-brand">Sophia (Sumin) Mok</div>
              <button
                className="mnav-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <span />
                <span />
              </button>
            </div>

            {/* centered links */}
            <nav className="mnav-overlay-center">
              <NavLink to="/" onClick={() => setOpen(false)} className="mnav-biglink">
                Demo Reel
              </NavLink>
              <NavLink to="/portfolio" onClick={() => setOpen(false)} className="mnav-biglink">
                Portfolio
              </NavLink>
              <NavLink to="/resume" onClick={() => setOpen(false)} className="mnav-biglink">
                Resume
              </NavLink>
              <NavLink to="/articles" onClick={() => setOpen(false)} className="mnav-biglink">
                Articles
              </NavLink>
            </nav>

            {/* bottom circle “in” */}
            <div className="mnav-overlay-bottom">
              <a
                href="https://www.linkedin.com/in/sophiasuminmok"
                target="_blank"
                rel="noopener noreferrer"
                className="mnav-circle"
                onClick={() => setOpen(false)}
              >
                in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

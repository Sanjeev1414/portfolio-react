import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Sidebar.css';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  const sidebarVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleNavClick}
          />

          {/* Sidebar */}
          <motion.div
            className="sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="sidebar-content">
              <h2 className="sidebar-title">Menu</h2>
              <nav className="sidebar-nav">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="sidebar-link"
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={handleNavClick}
                  >
                    <span className="sidebar-link-text">{item}</span>
                    <span className="sidebar-link-icon">→</span>
                  </motion.a>
                ))}
              </nav>

              {/* Social Links */}
              <motion.div
                className="sidebar-social"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h3>Connect</h3>
                <div className="social-links">
                  <a
                    href="https://github.com/Sanjeev1414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjeev-nandihalli-260983306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    LinkedIn
                  </a>
                  <a href="mailto:ssanjeev2667@gmail.com" className="social-link">
                    Email
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;

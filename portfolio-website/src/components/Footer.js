import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Footer Text */}
          <div className="footer-text">
            <p>
              <span className="gradient-text">Sanjeev Nandihalli</span> © 2026 | All Rights Reserved
            </p>
            <p className="footer-tagline">Building amazing web experiences, one project at a time.</p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="scroll-top-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>↑</span>
          </motion.button>

          {/* Tech Stack Footer */}
          <div className="footer-tech">
            <span>Made with</span>
            <span className="tech-icons">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                title="React"
              >
                ⚛️
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                title="Framer Motion"
              >
                ✨
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                title="Love"
              >
                ❤️
              </motion.span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;

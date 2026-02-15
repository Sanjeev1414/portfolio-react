import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(generatedParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg-gradient"></div>

      {/* Animated Particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [1, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image or Icon */}
        <motion.div className="hero-image-wrapper" variants={itemVariants}>
          <motion.div
            className="hero-image"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="image-placeholder">
              <span>👨‍💻</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 className="hero-title" variants={itemVariants}>
          Welcome to <br />
          <span className="gradient-text">Sanjeev Nandihalli</span>
          <br />
          Portfolio
        </motion.h1>

        {/* Subheading with Typing Effect */}
        <motion.div className="hero-subtitle-wrapper" variants={itemVariants}>
          <h2 className="hero-subtitle">
            Full Stack <span className="typing-text">Developer</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p className="hero-description" variants={itemVariants}>
          Building amazing web experiences with modern technologies. <br />
          Java | React | Spring Boot | JDBC | MySQL
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
            <span className="button-icon">→</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Me</span>
            <span className="button-icon">📧</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-dot"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

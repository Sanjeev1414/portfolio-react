import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* Profile Card */}
          <motion.div className="about-wrapper" variants={itemVariants}>
            <div className="about-card glass-effect">
              <div className="card-header">
                <h3 className="name-heading">Sanjeev Nandihalli</h3>
                <p className="role-badge">Full Stack Developer</p>
              </div>

              <div className="about-text">
                <p>
                  I'm a passionate <strong>Full Stack Developer</strong> currently working as a{' '}
                  <span className="highlight">Backend Developer at Effigo</span>.
                </p>

                <p>
                  With a strong foundation in Java, Spring Boot, and React, I craft efficient and
                  scalable solutions that solve real-world problems. I love building intuitive user
                  interfaces while ensuring robust backend architecture.
                </p>

                <p>
                  I believe in continuous learning and am always excited to explore new technologies
                  and best practices in software development.
                </p>
              </div>

              {/* Key Info */}
              <motion.div className="about-info" variants={itemVariants}>
                <div className="info-item">
                  <span className="info-icon">🎓</span>
                  <div>
                    <h4>Education</h4>
                    <p>B.E in Information Science Engineering (2025)</p>
                    <p className="info-subtitle">CGPA: 7.9</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">💼</span>
                  <div>
                    <h4>Current Role</h4>
                    <p>Backend Developer</p>
                    <p className="info-subtitle">at Effigo</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">✨</span>
                  <div>
                    <h4>Specialization</h4>
                    <p>Full Stack Development</p>
                    <p className="info-subtitle">Java | React | Spring Boot</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div className="strengths" variants={itemVariants}>
            <h3 className="strengths-title">Key Strengths</h3>
            <div className="strengths-grid">
              {[
                'Problem Solving',
                'Team Player',
                'Quick Learner',
                'Communication',
                'Clean Code',
                'Attention to Detail',
              ].map((strength, index) => (
                <motion.div
                  key={strength}
                  className="strength-badge"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Education.css';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const educationData = [
    {
      degree: 'B.E Information Science Engineering',
      institution: 'SKSV College of Engineering and Technology, Laxmeshwar',
      year: 2025,
      cgpa: '7.9',
      icon: '🎓',
      highlight: true,
    },
    {
      degree: 'Pre-University Course (PUC)',
      institution: 'St. Annes PU College, Haveri',
      year: 2021,
      percentage: '87%',
      icon: '📚',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'K.P.S Adur (Hangal)',
      year: 2019,
      percentage: '83.36%',
      icon: '✏️',
    },
  ];

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
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* Education Cards */}
          <div className="education-grid">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className={`education-card ${edu.highlight ? 'highlight' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Card Icon */}
                <motion.div
                  className="edu-icon"
                  whileHover={{ rotate: 20, scale: 1.2 }}
                >
                  {edu.icon}
                </motion.div>

                {/* Card Content */}
                <div className="edu-content">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>

                  {/* Meta Info */}
                  <div className="edu-meta">
                    <motion.div className="meta-item" whileHover={{ scale: 1.05 }}>
                      <span className="meta-label">Year:</span>
                      <span className="meta-value">{edu.year}</span>
                    </motion.div>

                    <motion.div className="meta-item" whileHover={{ scale: 1.05 }}>
                      <span className="meta-label">{edu.cgpa ? 'CGPA:' : 'Percentage:'}</span>
                      <span className="meta-value">{edu.cgpa || edu.percentage}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Border Animation */}
                <div className="card-border"></div>
              </motion.div>
            ))}
          </div>

          {/* Certification Section */}
          <motion.div
            className="certification-section"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <h3 className="certification-title">🏆 Certifications & Training</h3>
            <div className="certification-items">
              {[
                {
                  title: 'Java Full Stack Development',
                  issuer: 'Tap Academy',
                  date: '2025',
                },
                {
                  title: 'Advanced Java (JSP, Servlets, JDBC, JEE)',
                  issuer: 'Tap Academy',
                  date: '2025',
                },
                {
                  title: 'Full Stack Development',
                  issuer: 'SVARKS Technologies',
                  date: '2023',
                },
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  className="cert-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="cert-icon">✓</span>
                  <div className="cert-info">
                    <p className="cert-title">{cert.title}</p>
                    <p className="cert-meta">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

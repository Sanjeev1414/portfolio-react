import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ItCompanyScene from './ItCompanyScene';
import '../styles/Experience.css';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Effigo',
      duration: 'Present',
      description: 'Currently working on backend development projects using modern technologies.',
      type: 'current',
      icon: '💼',
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'SVARKS Technologies',
      duration: '2023',
      description:
        'Completed a full-stack development internship, gaining hands-on experience in frontend and backend technologies. Also worked with Grand Coffee Shop Project.',
      icon: '🚀',
    },
    {
      title: 'Java Full Stack Trainee',
      company: 'Tap Academy',
      duration: '2025',
      description:
        'Intensive Java full-stack development training course. Trained in Core Java, Advanced Java (JSP, Servlets, JDBC, JEE), Spring, and Hands-on experience in HTML, CSS, JavaScript, MySQL.',
      icon: '📚',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const alternateVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  });

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* IT Company Scene */}
          <ItCompanyScene />

          {/* Timeline */}
          <div className="timeline">
            {/* Timeline Line */}
            <motion.div className="timeline-line" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="timeline-item"
                variants={alternateVariants(index)}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`timeline-content ${exp.type === 'current' ? 'active' : ''}`}>
                  {/* Timeline Dot */}
                  <motion.div
                    className="timeline-dot"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: 'spring',
                      stiffness: 100,
                    }}
                  >
                    <span className="timeline-icon">{exp.icon}</span>
                  </motion.div>

                  {/* Content Card */}
                  <div className="experience-card glass-effect">
                    <div className="card-header">
                      <h3 className="exp-title">{exp.title}</h3>
                      {exp.type === 'current' && <span className="badge">Current</span>}
                    </div>

                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-duration">
                      <span className="duration-icon">📅</span>
                      {exp.duration}
                    </div>

                    <p className="exp-description">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="experience-highlights"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8 }}
          >
            <h3>Key Achievements</h3>
            <div className="highlights-grid">
              {[
                { icon: '⭐', text: 'Full Stack Development' },
                { icon: '🎯', text: 'Problem Solving' },
                { icon: '💡', text: 'Innovation-Focused' },
                { icon: '🤝', text: 'Team Collaboration' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="highlight-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="highlight-icon">{item.icon}</span>
                  <span className="highlight-text">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

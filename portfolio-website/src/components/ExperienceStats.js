import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ExperienceStats.css';

const ExperienceStats = ({ inView }) => {
  const stats = [
    { label: 'Years Active', value: '2+', icon: '📅' },
    { label: 'Projects', value: '10+', icon: '🚀' },
    { label: 'Technologies', value: '15+', icon: '⚙️' },
    { label: 'Companies', value: '3', icon: '🏢' },
  ];

  const skills = [
    { name: 'Backend Development', level: 95 },
    { name: 'Full Stack', level: 90 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Team Collaboration', level: 88 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="experience-stats-panel">
      {/* Stats Grid */}
      <motion.div
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Breakdown */}
      <motion.div
        className="skills-breakdown"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="breakdown-title">Core Strengths</h3>
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <motion.div
              className="skill-bar-container"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 1 }}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Experience Summary */}
      <motion.div
        className="experience-summary"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="summary-item">
          <span className="summary-icon">🎓</span>
          <div>
            <h4>Training</h4>
            <p>Java Full Stack @ Tap Academy</p>
          </div>
        </div>
        <div className="summary-item">
          <span className="summary-icon">💼</span>
          <div>
            <h4>Current Role</h4>
            <p>Backend Developer @ Effigo</p>
          </div>
        </div>
        <div className="summary-item">
          <span className="summary-icon">🌟</span>
          <div>
            <h4>Specialty</h4>
            <p>Full Stack Solutions</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceStats;

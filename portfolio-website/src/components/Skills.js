import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const allSkills = {
    'Programming Languages': [
      { name: 'Java', level: 90, icon: '☕' },
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'JavaScript', level: 85, icon: '📜' },
      { name: 'C', level: 70, icon: '⚙️' },
    ],
    Frontend: [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'HTML5', level: 95, icon: '🏗️' },
      { name: 'CSS3', level: 90, icon: '🎨' },
      { name: 'JavaScript', level: 85, icon: '📜' },
    ],
    Backend: [
      { name: 'Spring Boot', level: 88, icon: '🌱' },
      { name: 'JDBC', level: 80, icon: '🔌' },
      { name: 'Servlets & JSP', level: 80, icon: '🖥️' },
      { name: 'REST APIs', level: 85, icon: '🔗' },
    ],
    Database: [
      { name: 'MySQL', level: 85, icon: '🗄️' },
      { name: 'SQL', level: 90, icon: '📊' },
      { name: 'Supabase', level: 75, icon: '☁️' },
    ],
    Tools: [
      { name: 'Git', level: 85, icon: '🔀' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Google Cloud', level: 70, icon: '☁️' },
      { name: 'Maven', level: 75, icon: '📦' },
    ],
    'Soft Skills': [
      { name: 'Leadership', level: 80, icon: '👥' },
      { name: 'Communication', level: 85, icon: '💬' },
      { name: 'Teamwork', level: 90, icon: '🤝' },
      { name: 'Problem Solving', level: 90, icon: '🧩' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="section-header" variants={categoryVariants}>
            <h2 className="section-title">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {Object.entries(allSkills).map((category, catIndex) => (
              <motion.div
                key={category[0]}
                className="skill-category"
                variants={categoryVariants}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="category-title">{category[0]}</h3>
                <div className="skills-list">
                  {category[1].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={skillVariants}
                      transition={{ delay: skillIndex * 0.08 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar-container">
                        <motion.div
                          className="skill-bar"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        >
                          <div className="skill-bar-glow"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack Icons */}
          <motion.div className="tech-stack" variants={categoryVariants}>
            <h3 className="stack-title">Technology Stack</h3>
            <div className="tech-icons">
              {[
                { icon: '☕', label: 'Java' },
                { icon: '⚛️', label: 'React' },
                { icon: '🌱', label: 'Spring' },
                { icon: '🗄️', label: 'MySQL' },
                { icon: '🔀', label: 'Git' },
                { icon: '💻', label: 'VS Code' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="tech-icon"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="icon-text">{tech.icon}</span>
                  <p className="icon-label">{tech.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

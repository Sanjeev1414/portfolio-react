import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Smart Bookmark Application',
      description:
        'Smart bookmark manager to organize and store bookmarks efficiently in the cloud. Features include categorization, search, and cloud synchronization.',
      technologies: ['React', 'Supabase', 'Google Cloud', 'CSS3'],
      liveLink: 'https://smart-bookmark-app.vercel.app/',
      image: '🔖',
      color: '#6366f1',
    },
    {
      title: 'Smart Agriculture using IoT & AIML',
      description:
        'IoT-based smart agriculture system using Arduino to monitor temperature and humidity in real time. Uses SQL for storing sensor data and AIML for predictive analytics.',
      technologies: ['Java', 'Arduino', 'SQL', 'Spring Boot'],
      image: '🌾',
      color: '#06b6d4',
    },
    {
      title: 'Restaurant Management System',
      description:
        'Full-stack restaurant management system built with Java and Spring Boot. Features menu management, order processing, billing, and user role management.',
      technologies: ['Java', 'Spring Boot', 'JSP', 'MySQL', 'HTML/CSS'],
      image: '🍽️',
      color: '#ec4899',
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div
            className="section-header"
            variants={projectVariants}
          >
            <h2 className="section-title">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={projectVariants}
                whileHover={{ y: -10 }}
              >
                {/* Project Header */}
                <div className="project-header">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-badge">{projects.length - index}</div>
                </div>

                {/* Project Image/Icon Background */}
                <div className="project-image-bg" style={{ borderColor: project.color }}>
                  <span className="image-icon">{project.image}</span>
                </div>

                {/* Project Content */}
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Technologies */}
                  <div className="project-tech-stack">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="project-footer">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Live Demo</span>
                      <span className="link-icon">→</span>
                    </motion.a>
                  )}
                </div>

                {/* Gradient Overlay */}
                <div
                  className="project-overlay"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}40, transparent)`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="projects-cta"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p>Want to see more projects?</p>
            <motion.a
              href="https://github.com/Sanjeev1414"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit My GitHub
              <span>→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

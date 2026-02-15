import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Freelancing.css';

const Freelancing = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using React, Node.js, and cloud technologies',
      icon: '🚀',
      price: 'Custom Quote',
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'Robust API development, database design, and server-side architecture',
      icon: '⚙️',
      price: 'Custom Quote',
    },
    {
      id: 3,
      title: 'Database Design',
      description: 'Optimized database schemas, migrations, and query optimization',
      icon: '💾',
      price: 'Custom Quote',
    },
    {
      id: 4,
      title: 'Cloud Integration',
      description: 'AWS, Azure, and cloud services integration and deployment',
      icon: '☁️',
      price: 'Custom Quote',
    },
    {
      id: 5,
      title: 'Code Review & Optimization',
      description: 'Performance optimization, code refactoring, and best practices implementation',
      icon: '🔍',
      price: 'Custom Quote',
    },
    {
      id: 6,
      title: 'Consulting',
      description: 'Technical consultation on architecture, tech stack selection, and project planning',
      icon: '💡',
      price: 'Custom Quote',
    },
  ];

  const capabilities = [
    { label: 'Quick Turnaround', value: '48-72 hours for MVP' },
    { label: 'Quality Assurance', value: '100% tested code' },
    { label: 'Communication', value: 'Daily updates & support' },
    { label: 'Flexibility', value: 'Scalable & maintainable' },
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
    <section id="freelancing" className="freelancing" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Freelancing Services</h2>
          <p className="section-subtitle">
            Available for remote projects | Flexible rates | Expert-level solutions
          </p>
        </motion.div>

        {/* Capabilities Highlights */}
        <motion.div
          className="capabilities-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="capability-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h4>{capability.label}</h4>
              <p>{capability.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: '0 20px 60px rgba(168, 85, 247, 0.4)',
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Project
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="freelancing-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss your requirements and create something amazing together</p>
          <motion.a
            href="#contact"
            className="contact-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelancing;

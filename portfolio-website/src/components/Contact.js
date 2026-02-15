import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ssanjeev2667@gmail.com',
      link: 'mailto:ssanjeev2667@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9353852667',
      link: 'tel:+919353852667',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'Sanjeev Nandihalli',
      link: 'https://www.linkedin.com/in/sanjeev-nandihalli-260983306',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Sanjeev1414',
      link: 'https://github.com/Sanjeev1414',
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
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="contact-wrapper">
            {/* Contact Methods */}
            <motion.div className="contact-methods" variants={itemVariants}>
              <h3>Contact Information</h3>
              <div className="methods-grid">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="method-icon">{method.icon}</span>
                    <div className="method-info">
                      <div className="method-label">{method.label}</div>
                      <div className="method-value">{method.value}</div>
                    </div>
                    <span className="method-arrow">→</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-wrapper" variants={itemVariants}>
              <h3>Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form glass-effect">
                {/* Success Message */}
                {submitted && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span>✓</span>
                    <p>Thank you! I'll get back to you soon.</p>
                  </motion.div>
                )}

                {/* Name Field */}
                <motion.div
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Send Message</span>
                  <span className="button-icon">✈️</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3>Follow Me</h3>
            <div className="social-icons">
              {[
                { icon: '💼', label: 'LinkedIn', link: 'https://www.linkedin.com/in/sanjeev-nandihalli-260983306' },
                { icon: '🐙', label: 'GitHub', link: 'https://github.com/Sanjeev1414' },
                { icon: '📧', label: 'Email', link: 'mailto:ssanjeev2667@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ y: -10, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

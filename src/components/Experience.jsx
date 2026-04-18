import React from 'react';
import { motion } from 'framer-motion';
import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer Intern',
      company: 'Software Development Internship',
      period: 'Internship Experience',
      description: 'Built React.js features, connected REST APIs, and supported backend work with Node.js and FastAPI.',
      technologies: ['React.js', 'JavaScript', 'Node.js', 'FastAPI']
    },
    {
      title: 'Frontend Development Projects',
      company: 'Academic and Personal Work',
      period: 'Hands-On Experience',
      description: 'Developed responsive interfaces with React.js and Tailwind CSS, with an emphasis on reusable components and clean implementation.',
      technologies: ['React.js', 'Tailwind CSS', 'HTML', 'CSS']
    },
    {
      title: 'Backend and API Development',
      company: 'Project-Based Learning',
      period: 'Ongoing',
      description: 'Built backend logic, API endpoints, and database-connected features for full-stack applications.',
      technologies: ['FastAPI', 'Node.js', 'MongoDB', 'REST APIs']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="experience-title"
          variants={itemVariants}
        >
          Experience
        </motion.h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <motion.div
                className="timeline-content"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="timeline-marker"></div>
                <h3 className="exp-title">{exp.title}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <span className="exp-period">{exp.period}</span>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

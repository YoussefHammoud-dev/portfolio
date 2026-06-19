import React from 'react';
import { motion as Motion } from 'framer-motion';
import '../styles/skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      category: 'Tools and Workflow',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'TypeScript', level: 70 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className="skills-section">
      <Motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Motion.h2
          className="skills-title"
          variants={itemVariants}
        >
          Core Skills
        </Motion.h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <Motion.div
              key={index}
              className="skills-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <Motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <Motion.div
                        className="progress-fill"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Skills;

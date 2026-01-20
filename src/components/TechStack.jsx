import React from 'react';
import './TechStack.css';

const techGroups = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "Python", "Java", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    items: ["React", "Vite", "Redux Toolkit", "Zustand", "Mantine UI", "Bootstrap"]
  },
  {
    category: "Backend & DB",
    items: ["Spring Boot", "Flask", "MySQL", "Jinja2"]
  },
  {
    category: "Tools & Others",
    items: ["Git / GitHub", "Raspberry Pi", "MQTT", "VS Code", "Figma"]
  }
];

const TechStack = () => {
  return (
    <section id="skills" className="section tech-stack-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="tech-grid">
          {techGroups.map((group, index) => (
            <div key={index} className="tech-category">
              <h3>{group.category}</h3>
              <ul className="tech-list">
                {group.items.map((item, idx) => (
                  <li key={idx} className="tech-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-section">
            <h3>Background & Purpose</h3>
            <p>{project.background}</p>
          </div>

          <div className="modal-section">
            <h3>Problem & Solution</h3>
            <p>{project.problemSolution}</p>
          </div>

          <div className="modal-section">
            <h3>My Actions & Insights</h3>
            <p>{project.actionsInsights}</p>
          </div>

          <div className="modal-section">
            <h3>Key Achievements</h3>
            <p>{project.achievement}</p>
          </div>

          {project.architecture && (
            <div className="modal-section">
              <h3>System Architecture</h3>
              <div className="architecture-image-container">
                <img src={project.architecture} alt={`${project.title} Architecture`} className="architecture-image" />
              </div>
            </div>
          )}

          <div className="modal-section">
            <h3>Growth & Contribution</h3>
            <p>{project.contribution}</p>
          </div>

          <div className="modal-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              View Code on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

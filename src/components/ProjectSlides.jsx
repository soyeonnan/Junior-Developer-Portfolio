import React from 'react';
import './Projects.css'; // Re-use projects CSS for now

export const FeaturedSlide = ({ summary, role, stack, title }) => (
    <div className="slide-content featured-slide">
        <div className="slide-header">
            <h4>{title}</h4>
            <p className="slide-role">{role}</p>
        </div>
        <div className="slide-body">
            <p className="featured-summary">{summary}</p>
            <div className="tech-stack-display">
                {stack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                ))}
            </div>
        </div>
    </div>
);

export const ArchitectureSlide = ({ diagram, description, title }) => (
    <div className="slide-content architecture-slide">
        <div className="slide-header">
            <h4>{title}</h4>
        </div>
        <div className="slide-body">
            <div className="arch-diagram-container">
                <pre className="arch-diagram">{diagram}</pre>
            </div>
            <p className="arch-description">{description}</p>
        </div>
    </div>
);

export const ImplementationSlide = ({ items = [], title }) => (
    <div className="slide-content implementation-slide">
        <div className="slide-header">
            <h4>{title}</h4>
        </div>
        <div className="slide-body">
            <ul className="implementation-list">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

export const TroubleSlide = ({ items = [], title }) => (
    <div className="slide-content trouble-slide">
        <div className="slide-header">
            <h4>{title}</h4>
        </div>
        <div className="slide-body">
            <div className="trouble-list">
                {items.map((item, i) => (
                    <div key={i} className="trouble-item">
                        <div className="trouble-problem">
                            <strong>🚨 Problem:</strong> {item.problem}
                        </div>
                        <div className="trouble-solution">
                            <strong>✅ Solution:</strong> {item.solution}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

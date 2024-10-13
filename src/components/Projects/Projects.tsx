import React from 'react';
import styles from './Projects.module.scss';
import { Project } from '../../types';

const projects: Project[] = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1', technologies: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, title: 'Project 2', description: 'Description for Project 2', technologies: ['Python', 'Django', 'PostgreSQL'] },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h2>My Projects</h2>
            <div className={styles.projectGrid}>
                {projects.map(project => (
                    <div key={project.id} className={styles.projectCard}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.technologies}>
                            {project.technologies.map(tech => (
                                <span key={tech} className={styles.techPill}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

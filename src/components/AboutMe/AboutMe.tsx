import React from 'react';
import styles from './AboutMe.module.scss';
import johnnyImage from '../../content/images/JohnnyHo.jpg';

const AboutMe: React.FC = () => {
    const calculateExperience = (): number => {
        const startDate = new Date('2020-10-01'); // October 1, 2020
        const currentDate = new Date();
        const diffInYears = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
        return Math.floor(diffInYears);
    };

    const yearsOfExperience = calculateExperience();

    return (
        <section id="about" className={styles.aboutMe}>
            <div className={styles.content}>
                <div className={styles.profilePic}>
                    <img src={johnnyImage} alt="Johnny Ho" />
                </div>
                <div className={styles.description}>
                    <h1>Johnny Ho</h1>
                    <p>Hi! I’m Johnny, a software engineer with {yearsOfExperience} years of experience in full-stack development. I specialize in building scalable web applications and solving complex technical problems using technologies like JavaScript, React, Node.js, and Python. I’m passionate about turning ideas into clean, efficient code and love collaborating on innovative projects. Let’s connect and explore how we can work together!</p>
                    <button className={styles.contactButton}>Contact Me</button>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

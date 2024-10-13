import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const scrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="#about" onClick={scrollToSection('about')}>About</a></li>
                    <li><a href="#projects" onClick={scrollToSection('projects')}>Projects</a></li>
                    <li><a href="#extras" onClick={scrollToSection('extras')}>Extras</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

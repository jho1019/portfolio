import React from 'react';
import styles from './Extras.module.scss';

const Extras: React.FC = () => {
    return (
        <section id="extras" className={styles.extras}>
            <h2>Extras</h2>
            <p>This section is for additional information, skills, or any other content you'd like to showcase.</p>
            {/* Add more content here as needed */}
        </section>
    );
};

export default Extras;
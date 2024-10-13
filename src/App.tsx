import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Extras from './components/Extras/Extras';
import styles from './App.module.scss';

const App: React.FC = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className={styles.app}>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <AboutMe />
                                <Projects />
                                <Extras />
                            </>
                        } />
                        {/* Add other routes as needed */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

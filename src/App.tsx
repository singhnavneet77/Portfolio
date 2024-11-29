import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Loader from "./components/Loader";

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // Loader
    const [isLoading, setIsLoading] = useState(true);
    const handleLoaderFinish = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <Loader onFinish={handleLoaderFinish} />}
            {!isLoading && (
                <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                    <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
                    <FadeIn transitionDuration={700}>
                        <Main />
                        <About />
                        <Projects />
                        <Skills />
                        <Timeline />
                        <Contact />
                    </FadeIn>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;

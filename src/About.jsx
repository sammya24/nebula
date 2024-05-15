import React, { useEffect, useRef, useState } from 'react';
import './style.css';

function About({ }) {
    const aboutSectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const aboutSection = aboutSectionRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                console.log('Entry:', entry);
                if (entry.isIntersecting) {
                    console.log('About section is intersecting');
                    entry.target.style.animation = 'slideInFromLeft 1s ease-out forwards';
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };
        

        const observer = new IntersectionObserver(handleIntersect, options);

        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    return (
        <div id="about_section_bg">
            <div id="about_section" ref={aboutSectionRef}>
                <div className="about_section2" style={{ opacity: isVisible ? 1 : 0 }}>
                    <h3>what is astrology?</h3>
                    <img id="flower" src="about-photo-1.png" alt="flower" title="flower" />
                    <p>astrology is a belief system that suggests celestial bodies' positions and movements influence human affairs and natural phenomena</p>
                </div>
                <div className="about_section2" style={{ opacity: isVisible ? 1 : 0 }}>
                    <h3>what is my sign?</h3>
                    <img id="snake" src="about-photo-2.png" alt="snake" title="snake" />
                    <p>your sign is based on the position of the Sun in the zodiac at the time of your birth, typically falling within a specific range of dates</p>
                </div>
                <div className="about_section2" style={{ opacity: isVisible ? 1 : 0 }}>
                    <h3>what's the point?</h3>
                    <img id="hands" src="about-photo-3.png" alt="hands" title="hands" />
                    <p>enjoying astrology can be about finding meaning, exploring personal insights, or simply appreciating its symbolic aspects</p>
                </div>
            </div>
        </div>
    );
}

export default About;

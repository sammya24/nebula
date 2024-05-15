import React from 'react';
import '../public/arrow.png'
import '../public/cat-animation.gif'
import './style.css'

function BigBox({ }) {
    const scrollToAbout = () => {
        document.getElementById('about_section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div>
                <section id="name_bigbox">
                    <h1>unlock the stars</h1>
                    <img id="cat" src="cat-animation.gif" alt="cat" title="Cat" />
                    <img id="arrow" src="arrow.png" alt="arrow" title="Arrow" onClick={scrollToAbout} />
                </section>
            </div>
        </>
    );
}

export default BigBox;

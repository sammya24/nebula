import React from 'react';
import './style.css';
import '../public/logo.png';

function Header({ }) {

    const scrollToAbout = (e) => {
        e.preventDefault();
        document.getElementById('about_section').scrollIntoView({ behavior: 'smooth' });
    };
    
    const scrollToMoons = (e) => {
        e.preventDefault();
        document.getElementById('moons_block').scrollIntoView({ behavior: 'smooth' });
    };
    
    const scrollToSigns = (e) => {
        e.preventDefault();
        document.getElementById('signs_section').scrollIntoView({ behavior: 'smooth' });
    };
    
    const scrollToNewsletter = (e) => {
        e.preventDefault();
        document.getElementById('newsletter_block').scrollIntoView({ behavior: 'smooth' });
    };
    

    return (

        <ul>
            <li id="nebula">
                <img id="logo" src="logo.png" alt="nebula" title="Logo" />
            </li>
            <li>
                <a href="#" onClick={scrollToAbout}>learn</a>
            </li>
            <li>
                <a href="#" onClick={scrollToMoons}>moons</a>
            </li>
            <li>
                <a href="#" onClick={scrollToSigns}> signs</a>
            </li>
            <li>
                <button id="newsletter" type="submit" onClick={scrollToNewsletter}>
                    newsletter
                </button>
            </li>
        </ul>

    );
}


export default Header;
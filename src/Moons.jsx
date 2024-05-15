import React from 'react';
import axios from 'axios';

function Moons({ isVisible, moonPhaseData }) {
    return (
        <section id="moons-section" className={isVisible ? "slide-in-right" : ""}>
            <section id="moons">
                <div className='moon-day'>
                    <h3>yesterday</h3>
                    <img src={moonPhaseData[0]} alt="yesterday" />
                </div>
                <div className='moon-day'>
                    <h3>today</h3>
                    <img src={moonPhaseData[1]} alt="today" />
                </div>
                <div className='moon-day'>
                    <h3>tomorrow</h3>
                    <img src={moonPhaseData[2]} alt="tomorrow" />
                </div>
            </section>
        </section>
    );
}

export default Moons;

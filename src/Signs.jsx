import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import useSlideInAnimation from './useSlideInAnimation';

function getZodiacSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let zodiacSign;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = 'aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = 'taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiacSign = 'gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiacSign = 'cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = 'leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = 'virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiacSign = 'libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiacSign = 'scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiacSign = 'sagittarius';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiacSign = 'capricorn';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiacSign = 'aquarius';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiacSign = 'pisces';
    } else {
        zodiacSign = 'unknown';
    }

    return zodiacSign;
}

function Signs() {
    const [selectedZodiacSign, setSelectedZodiacSign] = useState('');
    const signsSectionRef = useRef(null);

    useEffect(() => {
        const savedDate = localStorage.getItem('lastEnteredDate');
        if (savedDate) {
            document.getElementById('datepicker').value = savedDate;
    
            const currentDate = new Date();
            const savedDateObj = new Date(savedDate);
            if (currentDate.getDate() === savedDateObj.getDate() &&
                currentDate.getMonth() === savedDateObj.getMonth() &&
                currentDate.getFullYear() === savedDateObj.getFullYear()) {
                    
                document.getElementById('datepicker').classList.add('highlighted-date');
            }
    
            const zodiacSign = getZodiacSign(new Date(savedDate));
            setSelectedZodiacSign(zodiacSign);
        }
    }, []);
    

    const handleDateChange = (event) => {
        const date = new Date(event.target.value);
        const zodiacSign = getZodiacSign(date);
        setSelectedZodiacSign(zodiacSign);
        localStorage.setItem('lastEnteredDate', event.target.value);
    };

    const isVisible = useSlideInAnimation(signsSectionRef, 'left');

    return (

        <div id="signs_bg" >

        <div id="signs_section"ref={signsSectionRef}  style={{ opacity: isVisible ? 1 : 0 }}>
     
            <h2>discover your cosmic identity</h2>
            <form action="#">
                    <h4>enter your birthday:</h4>
                    <input type="date" id="datepicker" name="datepicker" onChange={handleDateChange} />
                </form>

                <div id="indiv_signs_container">
                <div className={`zodiac-sign ${selectedZodiacSign === 'aries'? 'active' : ''}`} id="aries">
                        <div className="zodiac-info">
                            <h3>aries</h3>
                            <p>march 21 - april 19</p>
                        </div>
                        <img id="aries" src="aries.png" alt="aries" title="Aries" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'taurus'? 'active' : ''}`} id="taurus">
                        <div className="zodiac-info">
                            <h3>taurus</h3>
                            <p>april 20 - may 20</p>
                        </div>
                        <img id="taurus" src="taurus.png" alt="taurus" title="taurus" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'gemini'? 'active' : ''}`} id="gemini">
                        <div className="zodiac-info">
                            <h3>gemini</h3>
                            <p>may 21 - june 20</p>
                        </div>
                        <img id="gemini" src="gemini.png" alt="gemini" title="gemini" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'cancer'? 'active' : ''}`} id="cancer">
                        <div className="zodiac-info">
                            <h3>cancer</h3>
                            <p>june 21 - july 22</p>
                        </div>
                        <img id="cancer" src="cancer.png" alt="cancer" title="cancer" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'leo'? 'active' : ''}`} id="leo">
                        <div className="zodiac-info">
                            <h3>leo</h3>
                            <p>july 23 - august 22</p>
                        </div>
                        <img id="leo" src="leo.png" alt="leo" title="leo" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'virgo'? 'active' : ''}`} id="virgo">
                        <div className="zodiac-info">
                            <h3>virgo</h3>
                            <p>august 23 - september 22</p>
                        </div>
                        <img id="virgo" src="virgo.png" alt="virgo" title="virgo" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'libra'? 'active' : ''}`} id="libra">
                        <div className="zodiac-info">
                            <h3>libra</h3>
                            <p>september 23 - october 22</p>
                        </div>
                        <img id="libra" src="libra.png" alt="libra" title="libra" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'scorpio'? 'active' : ''}`} id="scorpio">
                        <div className="zodiac-info">
                            <h3>scorpio</h3>
                            <p>october 23 - november 21</p>
                        </div>
                        <img id="scorpio" src="scorpio.png" alt="scorpio" title="scorpio" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'sagittarius'? 'active' : ''}`} id="sagittarius">
                        <div className="zodiac-info">
                            <h3>sagittarius</h3>
                            <p>november 22 - december 21</p>
                        </div>
                        <img id="sagittarius" src="sagittarius.png" alt="sagittarius" title="sagittarius" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'capricorn'? 'active' : ''}`} id="capricorn">
                        <div className="zodiac-info">
                            <h3>capricorn</h3>
                            <p>december 22 - january 19</p>
                        </div>
                        <img id="capricorn" src="capricorn.png" alt="capricorn" title="capricorn" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'aquarius'? 'active' : ''}`} id="aquarius">
                        <div className="zodiac-info">
                            <h3>aquarius</h3>
                            <p>january 20 - february 18</p>
                        </div>
                        <img id="aquarius" src="aquarius.png" alt="aquarius" title="aquarius" />
                    </div>

                    <div className={`zodiac-sign ${selectedZodiacSign === 'pisces'? 'active' : ''}`} id="pisces">
                        <div className="zodiac-info">
                            <h3>pisces</h3>
                            <p>february 19 - march 20</p>
                        </div>
                        <img id="pisces" src="pisces.png" alt="pisces" title="pisces" />
                    </div>

                </div>
        </div>
        </div>
    );
}

export default Signs;



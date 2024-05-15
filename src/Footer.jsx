import React from 'react';
import './style.css'

function Footer({ }) {

    return (
        <>
            <div id="footer_content">
                <div id="sammy">
                    <p>@ sammy hong 2024</p>
                </div>
                <div id="footer_main_content">

                    <div className="footer_row">
                        <ul>
                            <li>
                                <a href="#">about</a>
                            </li>
                            <li>
                                <a href="#">faq</a>
                            </li>
                            <li>
                                <a href="#">shop</a>
                            </li>
                            <li>
                                <a href="#">contact</a>
                            </li>
                            <li>
                                <a href="#">privacy</a>
                            </li>
                        </ul>

                    </div>
                    <div className="footer_row">
                        <ul>
                            <li>
                                <a href="#">jobs</a>
                            </li>
                            <li>
                                <a href="#">team</a>
                            </li>
                            <li>
                                <a href="#">application</a>
                            </li>

                        </ul>

                    </div>
                    <div className="footer_row">
                        <ul>
                            <li>
                                <div id="icons">
                                    <a href="#"><div id="icon1">

                                    </div>
                                    </a>
                                    <a href="#"><div id="icon2">

                                    </div> </a>
                                    <a href="#"><div id="icon3">
                                    </div> </a>

                                </div>
                            </li>
                            <li>
                                <a className="app" href="#">DOWNLOAD IOS</a>
                            </li>
                            <li>
                                <a className="app" href="#">DOWNLOAD ANDROID</a>
                            </li>


                        </ul>

                    </div>

                </div>

            </div>


        </>


    );
}


export default Footer;
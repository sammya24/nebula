import React, { useState } from 'react';
import '../public/arrow.png'
import '../public/cat-animation.gif'
import './style.css'

function Newsletter({ }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setName('');
        setEmail('');
    };

    return (
        <>
            <section id="newsletter_block">
                <h2>subscribe to our newsletter</h2>
          
                <form id="newsletter_input" onSubmit={handleSubmit}>
                <input
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button id="submit_newsletter" type="submit">subscribe</button>
                    </form>
           
            </section>


        </>


    );
}


export default Newsletter;
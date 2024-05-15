import React, { useRef, useState } from 'react';
import './style.css';
import useSlideInAnimation from './useSlideInAnimation';
import Moons from './Moons';
import axios from 'axios';

function MoonsSection() {
    const moonsSectionRef = useRef(null);
    const [showMoons, setShowMoons] = useState(false); 
    const [isLoading, setIsLoading] = useState(false); 
    const [moonPhaseData, setMoonPhaseData] = useState([]); 
    const handleButtonClick = async () => {
        setIsLoading(true); 
        await fetchMoonPhases();
        setShowMoons(true); 
        setIsLoading(false);
    };

    const isVisible = useSlideInAnimation(moonsSectionRef, 'right');

    const fetchMoonPhases = async () => {

        try {
            const authString = btoa('2638d322-c8eb-411e-b930-93c0ea442c8a:81115a948b57d8fc0132b6cd517b7c325ef062c3e97789ba8677464968fbaad75e472a3e9d07c29f40855201d345fe65227467da9eb20ec7b751521473796b148cf1b2de5765df52f1c253a3107b34d07ecdade1c5e2714acd8fb42ffcbe010428332f703e96a77693a014260c372289');
            const headers = {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/json'
            };

            const currentDate = new Date();
            const yesterday = new Date(currentDate);
            yesterday.setDate(currentDate.getDate() - 1);
            const tomorrow = new Date(currentDate);
            tomorrow.setDate(currentDate.getDate() + 1);

            const requests = [
                { date: yesterday.toISOString().slice(0, 10) },
                { date: currentDate.toISOString().slice(0, 10) },
                { date: tomorrow.toISOString().slice(0, 10) }
            ];

            const responses = await Promise.all(requests.map(request =>
                axios.post('https://api.astronomyapi.com/api/v2/studio/moon-phase', {
                    ...request,
                    format: 'png',
                    style: {
                        moonStyle: 'sketch',
                        backgroundStyle: 'stars',
                        backgroundColor: 'red',
                        headingColor: 'white',
                        textColor: 'red'
                    },
                    observer: {
                        latitude: 6.56774,
                        longitude: 79.88956,
                        date: request.date
                    },
                    view: {
                        type: 'portrait-simple',
                        orientation: 'south-up'
                    }
                }, { headers })
            ));
            setMoonPhaseData(responses.map(response => response.data.data.imageUrl));
        } catch (error) {
            console.error('Error fetching moon phases:', error);
        }
    };

    return (
        <div id="moons_block" ref={moonsSectionRef}>
            <section className="main_block" style={{ opacity: isVisible ? 1 : 0 }}>
                <div className="sub_block_1">
                    <h2>each distinctive phase of the moon has its own powerful connotations</h2>
                    <p>symbolizing emotions, sensitivities, and inner truths, the moon exposes how we reflect on our day-to-day experiences</p>

                    <button id="current_phases" type="submit" onClick={handleButtonClick}>
                        {isLoading ? 'loading...' : 'current phases'}
                        
                    </button>
                </div>

                {showMoons && <Moons isVisible={showMoons} moonPhaseData={moonPhaseData} />}
            </section>
        </div>
    );
}

export default MoonsSection;

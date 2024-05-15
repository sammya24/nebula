import React, { useEffect, useRef, useState } from 'react';

function useSlideInAnimation(ref, direction) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `slideInFrom${direction.charAt(0).toUpperCase() + direction.slice(1)} 1s ease-out forwards`;
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(handleIntersect, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, direction]);

    return isVisible;
}


export default useSlideInAnimation;

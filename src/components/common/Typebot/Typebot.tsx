import React, { useEffect } from 'react';
const Typebot = () => {
    useEffect(() => {
        // Load the external script
        const script = document.createElement('script');
        script.src = 'https://www.digilantern.com/cdn/index.global.js';
        script.async = true;

        script.onload = () => {
            // Initialize Typebot after the script has loaded
            if ((window as any).Typebot) {
                (window as any).Typebot.initContainer('typebot-container-3', {
                    url: `https://viewer.thinkchat.tech/all-in-one`,
                    loadWhenVisible: true,
                });
            }
        };

        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty array means this effect runs once on component mount

    return (
        <div>

            <div id="typebot-container-3"></div> {/* This is where Typebot will be rendered */}
        </div>
    );
};

export default Typebot;
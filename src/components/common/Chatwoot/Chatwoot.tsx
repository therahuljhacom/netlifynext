'use client';
import React, { useEffect } from 'react';
const Chatwoot = () => {
    useEffect(() => {
        const chatwootSettings = {
            position: 'right',
            type: 'standard',
            launcherTitle: 'Live Chat',
        };

        const BASE_URL = 'https://thinkchat.nectarinnovation.in';

        const script = document.createElement('script');
        script.src = `${BASE_URL}/packs/js/sdk.js`;
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            (window as any).chatwootSDK.run({
                websiteToken: 'jbTvuLpTGdtXA2UCPJELv8G9',
                baseUrl: BASE_URL,
            });
        };

        return () => {
            // Cleanup function to remove the script if necessary
            // (although this is typically handled by Chatwoot itself)
            script.remove();
        };
    }, []);

    return null; // No JSX needed as the script is loaded in useEffect
};

export default Chatwoot;


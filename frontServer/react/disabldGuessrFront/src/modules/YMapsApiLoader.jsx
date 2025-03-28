import { useEffect, useState } from 'react';

const YMapsApiLoader = ({ apiKeys, onLoad, onError }) => {
    const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (loaded || currentKeyIndex >= apiKeys.length) return;

        const scriptId = 'yandex-maps-api-script';
        const existingScript = document.getElementById(scriptId);

        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${apiKeys[currentKeyIndex]}`;
        script.async = true;

        script.onload = () => {
            setLoaded(true);
            if (onLoad) onLoad();
        };

        script.onerror = () => {
            console.error(`Failed to load Yandex Maps API with key ${currentKeyIndex}`);
            if (currentKeyIndex < apiKeys.length - 1) {
                setCurrentKeyIndex(currentKeyIndex + 1);
            } else if (onError) {
                onError(new Error('All API keys exhausted'));
            }
        };

        document.body.appendChild(script);

        return () => {
            if (script) script.remove();
        };
    }, [currentKeyIndex, apiKeys, loaded, onLoad, onError]);

    return null;
};

export default YMapsApiLoader;
import {useState} from "react";
import YMapsApiLoader from "./YMapsApiLoader.jsx";

export function YMapsModule() {

    const [mapReady, setMapReady] = useState(false);
    const [mapError, setMapError] = useState(null);

    const apiKeys = [
        'ваш_первый_ключ',
        'ваш_второй_ключ',
        'ваш_третий_ключ'
    ];

    const handleMapLoad = () => {
        setMapReady(true);


    };

    const handleMapError = (error) => {
        setMapError(error.message);
    };


    return (
        <>
            <YMapsApiLoader
                apiKeys={apiKeys}
                onLoad={handleMapLoad}
                onError={handleMapError}
            />
            <div className="map-container">
                <button className="control-button" id="randomLocation" onClick="endRound()">Next</button>

                <div id="map" className="map"></div>
            </div>
        </>
    );
}
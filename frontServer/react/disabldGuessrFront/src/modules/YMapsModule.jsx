import {useState} from "react";
import YMapsApiLoader from "./YMapsApiLoader.jsx";

export function YMapsModule() {

    const [mapReady, setMapReady] = useState(false);
    const [mapError, setMapError] = useState(null);


    let map;
    let player;
    const apiKeys = [
        '7f63d02f-3acc-4049-8122-8422f3f4052a',
        '1f403457-48e9-49d5-b205-00354fc661c0',
        '994f0d89-65dc-41a8-b8a2-4c30d408199f'
    ];

    async function initPanorama() {
        let coordinates = [56.8587, 35.9176];
        ymaps.panorama.locate(coordinates).then(
            function(panoramas) {
                console.log(panoramas)
                if (panoramas.length > 0) {
                    player = new ymaps.panorama.Player('player1', panoramas[0], {
                        suppressMapOpenBlock: true,
                        controls: ['fullscreenControl', 'zoomControl']
                    });

                    player.getPanorama().__proto__.getMarkers = () => {return [];};
                    console.log(player)
                    return player;
                } else {
                    initPanorama();
                }
            },
            function(error) {
                console.log(points[placeIndex]);
            }
        );

    }



    const handleMapLoad = () => {
        ymaps.ready(async () => {
            console.log(1);
            map = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 2,
                controls: ['zoomControl']
            }, {
                suppressMapOpenBlock: true,
                yandexMapDisablePoiInteractivity: true,

            });
            console.log(map);

            map.events.add('click', function (e) {
                playerGuess = e.get('coords');
                map.geoObjects.removeAll();
                let newOne = new ymaps.Placemark(playerGuess, {}, {
                    preset: 'islands#circleIcon',
                    iconColor: 'green'
                })
                map.geoObjects.add(newOne);
            });
            console.log(map);

            player = await initPanorama()
            console.log(player)

        });

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

            <div id="player1"/>
            <div className="map-container">
                <button className="control-button" id="randomLocation" onClick="endRound()">Next</button>

                <div id="map" className="map"/>
            </div>
        </>
    );
}
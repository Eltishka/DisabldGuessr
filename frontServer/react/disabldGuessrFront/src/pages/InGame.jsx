import "./InGame.css";
import {useState} from "react";
import {YMapsModule} from  "../modules/YMapsModule.jsx"

function InGame() {

    useState(() => {
        ymaps.ready(init);
        let playerGuess;
        let player;
        let map;
        let placeIndex;
        let timeSeconds = 0;
    })

    return (
        <>
            <div id="player1"></div>
            <div class="timer-container" id="timer">00:00</div>
            <YMapsModule/>

            <div class="transition-overlay" id="transitionOverlay">
                <div class="distance" id="distanceDisplay">0 km</div>
                <div>Distance to target</div>
            </div>
        </>
    );
}
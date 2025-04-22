import "./InGame.css";
import {useState} from "react";
import {YMapsModule} from  "../modules/YMapsModule.jsx"

export function InGame() {

    return (
        <>

            <div className="timer-container" id="timer">00:00</div>
            <YMapsModule/>

            <div className="transition-overlay" id="transitionOverlay">
                <div className="distance" id="distanceDisplay">0 km</div>
                <div>Distance to target</div>
            </div>
        </>
    );
}
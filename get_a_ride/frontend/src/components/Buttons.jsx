import { useState } from "react";
import './Buttons.css';
import uberIcon from '../assets/ubericon.png';
import indriveIcon from '../assets/indriveicon.png';
import didiIcon from '../assets/didiicon.png';

function Buttons({selectedApp, setSelectedApp}) {

    return(
    <div className="app-selector">
        <button className={`indrive-btn ${selectedApp === 'Indrive' ? 'active' : ''}`}
        onClick = {() => setSelectedApp('Indrive')}>
            <img src={indriveIcon} alt="Indrive" />
        </button>
        <button className={`uber-btn ${selectedApp === 'Uber' ? 'active' : ''}`}
        onClick={() => setSelectedApp('Uber')}>
            <img src={uberIcon} alt="Uber" />
            </button>
        <button className={`didi-btn ${selectedApp === 'Didi' ? 'active' : ''}`}
        onClick={() => setSelectedApp('Didi')}>
            <img src={didiIcon} alt="Didi" /></button>
    </div>
    );
}
export default Buttons
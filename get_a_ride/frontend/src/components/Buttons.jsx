import { useState } from "react";
import './Buttons.css';
import uberIcon from '../assets/ubericon.png';
import indriveIcon from '../assets/indriveicon.png';
import didiIcon from '../assets/didiicon.png';

function Buttons({selectedApp, setSelectedApp}) {

    return(
    <div className="app-selector">
        <button className={`indrive-btn ${selectedApp === 'indrive' ? 'active' : ''}`}
        onClick = {() => setSelectedApp('indrive')}>
            <img src={indriveIcon} alt="Indrive" />
        </button>
        <button className={`uber-btn ${selectedApp === 'uber' ? 'active' : ''}`}
        onClick={() => setSelectedApp('uber')}>
            <img src={uberIcon} alt="Uber" />
            </button>
        <button className={`didi-btn ${selectedApp === 'didi' ? 'active' : ''}`}
        onClick={() => setSelectedApp('didi')}>
            <img src={didiIcon} alt="didi" /></button>
    </div>
    );
}
export default Buttons
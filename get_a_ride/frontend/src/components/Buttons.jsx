import { useState } from "react";

function Buttons() {
    const [selectedApp, setSelectedApp] = useState(null);
    return(
    <div className="app-selector">
        <button className={`indrive-btn ${selectedApp === 'indrive' ? 'active' : ''}`}
        onClick = {() => setSelectedApp('indrive')}>
            <img src="" alt="Indrive" />
        </button>
        <button className={`uber-btn ${selectedApp === 'uber' ? 'active' : ''}`}
        onClick={() => setSelectedApp('uber')}>
            <img src="" alt="uber" /></button>
        <button className={`didi ${selectedApp === 'didi' ? 'active' : ''}`}
        onClick={() => setSelectedApp('didi')}>
            <img src="" alt="didi" /></button>
    </div>
    );
}
export default Buttons
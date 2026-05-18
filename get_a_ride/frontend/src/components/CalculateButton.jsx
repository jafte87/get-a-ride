import CalculatePrice from "../utils/CalculatePrice";
import CalculateDistance from "../utils/CalculateDistance";
import { useState } from "react";
import './CalculateButton.css'

function CalculateButton({pointA, pointB, selectedApp}) {
    const [result, setResult] = useState(null);
    function handleCalculation() {
        if (!pointA || !pointB) {
        alert('Please select two points on the map first!');
        return;
    }
    if (!selectedApp) {
        alert('Please select an app first!');
        return;
    }
        const distance = CalculateDistance(pointA, pointB);
        const price = CalculatePrice(selectedApp, distance);
        setResult({distance, price});
    }
    return (
        <div>
            <button className="cal-btn" onClick={handleCalculation}>
                Calculate
            </button>
            {result && (
                <div className="result">
                    <p>Distance: {result.distance.toFixed(2)} km</p>
                    <p>Price: {result.price.toFixed(2)} EGP</p>
                </div>
            )}
        </div>
    )
}

export default CalculateButton;
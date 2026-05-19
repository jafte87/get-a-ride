import CalculateDistance from "../utils/CalculateDistance";
import './RefreshButton.css';

function RefreshButton({pointA, pointB}) {
    if (pointA && pointB) {
        return (
            <button className="ref" onClick={() => window.location.reload()}>Refresh</button>
        )
    }
};

export default RefreshButton;
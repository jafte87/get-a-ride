import { useState } from "react";
import Buttons from "../components/Buttons";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import CalculateButton from "../components/CalculateButton";


function Home() {
    const [pointA, setPointA] = useState(null);
    const [pointB, setPointB] = useState(null);
    const [selectedApp, setSelectedApp] = useState(null);

    return (
        <div>
            <Navbar />
            <Buttons selectedApp = {selectedApp} setSelectedApp = {setSelectedApp}/>
            <Map pointA = {pointA} pointB = {pointB} setPointA = {setPointA} setPointB = {setPointB}/>
            <CalculateButton pointA = {pointA} pointB = {pointB} selectedApp = {selectedApp}/>
        </div>
    )
}

export default Home;
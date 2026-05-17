function CalculateDistance(pointA, pointB) {
    const R = 6371 ;
    const dLat = (pointB.lat - pointA.lat) * Math.PI / 180;
    const dLon = (pointB.lng - pointA.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(pointA.lat * Math.PI / 180) * Math.cos(pointB.lat * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

export default CalculateDistance;
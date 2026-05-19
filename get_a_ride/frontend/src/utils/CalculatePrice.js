const AppRates = {
    Uber: { baseFare: 20, perKm: 17},
    Didi: { baseFare: 18.75, perKm: 16},
    Indrive: { baseFare: 19, perKm: 15}
};

function CalculatePrice(app, distance) {
    const rate = AppRates[app];
    return rate.baseFare + rate.perKm * distance;
}

export default CalculatePrice;
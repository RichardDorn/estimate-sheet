export function calcTotalFiltersCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_FILTERS_COST",
        payload: newTotal
    }
}

export function updateFiftyMicWater(value) {
    return {
        type: "UPDATE_FIFTY_MICRON_WATER_FILTERS",
        payload: value
    }
}

export function updateTwentyMicWater(value) {
    return {
        type: "UPDATE_TWENTY_MICRON_WATER_FILTERS",
        payload: value
    }
}

export function updateFiveMicWater(value) {
    return {
        type: "UPDATE_FIVE_MICRON_WATER_FILTERS",
        payload: value
    }
}

export function updateNegAirPrime(value) {
    return {
        type: "UPDATE_NEG_AIR_PRIMARY_FILTERS",
        payload: value
    }
}

export function updateNegAirSecond(value) {
    return {
        type: "UPDATE_NEG_AIR_SECONDARY_FILTERS",
        payload: value
    }
}

export function updateNegAirHEPA(value) {
    return {
        type: "UPDATE_NEG_AIR_HEPA_FILTER",
        payload: value
    }
}
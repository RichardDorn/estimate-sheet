export function calcTotalPolyTubingCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_POLYTUBING_COST",
        payload: newTotal
    }
}

export function updateFourMilLayFlatTubing(value) {
    return {
        type: "UPDATE_FOUR_MIL_LAYFLAT_TUBING",
        payload: value
    }
}
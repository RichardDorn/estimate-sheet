export function calcTotalCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_COST",
        payload: newTotal
    }
}

export function updateFour_TenClear(value) {
    return {
        type: "UPDATE_FOUR_TEN_CLEAR",
        payload: value
    }
}

export function updateFour_TwentyEq(value) {
    return {
        type: "UPDATE_FOUR_TWENTY_EQ",
        payload: value
    }
}

export function updateFour_Twenty(value) {
    return {
        type: "UPDATE_FOUR_TWENTY",
        payload: value
    }
}

export function updateFour_TwentyBlack(value) {
    return {
        type: "UPDATE_FOUR_TWENTY_BLACK",
        payload: value
    }
}

export function updateSix_TwentyEq(value) {
    return {
        type: "UPDATE_SIX_TWENTY_EQ",
        payload: value
    }
}

export function updateSix_TwentyClear(value) {
    return {
        type: "UPDATE_SIX_TWENTY_CLEAR",
        payload: value
    }
}

export function updateSix_TwentyBlack(value) {
    return {
        type: "UPDATE_SIX_TWENTY_BLACK",
        payload: value
    }
}
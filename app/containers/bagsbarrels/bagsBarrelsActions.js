export function calcTotalBagsBarrelsCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_BAGSBARRELS_COST",
        payload: newTotal
    }
}

export function updateThirtyEight_SixtyClearGenDeb(value) {
    return {
        type: "UPDATE_THIRTYEIGHT_SIXTY_CLEAR_GEN_DEB",
        payload: value
    }
}

export function updateFiberBarrels(value) {
    return {
        type: "UPDATE_FIBER_BARRELS",
        payload: value
    }
}

export function updateThirty_FortyClearAB(value) {
    return {
        type: "UPDATE_THIRTY_FORTY_CLEAR_AB",
        payload: value
    }
}

export function updateThirty_FortyBlackAB(value) {
    return {
        type: "UPDATE_THIRTY_FORTY_BLACK_AB",
        payload: value
    }
}
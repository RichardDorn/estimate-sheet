export function calcTotalHandToolsCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_HANDTOOLS_COST",
        payload: newTotal
    }
}

export function updateToothBrush(value) {
    return {
        type: "UPDATE_TOOTH_BRUSH",
        payload: value
    }
}

export function updateThree_NinteenLongBrush(value) {
    return {
        type: "UPDATE_THREE_NINTEEN_LONG_HANDLE_BRUSH",
        payload: value
    }
}

export function updateFourInchWallScrape(value) {
    return {
        type: "UPDATE_FOUR_INCH_WALL_SCRAPER",
        payload: value
    }
}

export function updateBlades(value) {
    return {
        type: "UPDATE_BLADES",
        payload: value
    }
}

export function updateSpudBlades(value) {
    return {
        type: "UPDATE_SPUD_BAR_BLADES",
        payload: value
    }
}

export function updatePlasticB_ScoopShovel(value) {
    return {
        type: "UPDATE_PLASTIC_B_SCOOP_SHOVEL",
        payload: value
    }
}
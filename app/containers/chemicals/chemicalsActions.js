export function calcTotalChemicalsCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_CHEMICALS_COST",
        payload: newTotal
    }
}

export function updateFiveGalMasticRemover(value) {
    return {
        type: "UPDATE_FIVE_GALLON_MASTIC_REMOVER",
        payload: value
    }
}

export function updateFiftyFiveGalMasticRemover(value) {
    return {
        type: "UPDATE_FIFTY_FIVE_GALLON_MASTIC_REMOVER",
        payload: value
    }
}

export function updateSprayGlue(value) {
    return {
        type: "UPDATE_SPRAY_GLUE",
        payload: value
    }
}

export function updateFiveGalFibersetPMClear(value) {
    return {
        type: "UPDATE_FIVE_GALLON_FIBERSET_PM_CLEAR",
        payload: value
    }
}

export function updateFiveGalFibersetPMWhite(value) {
    return {
        type: "UPDATE_FIVE_GALLON_FIBERSET_PM_WHITE",
        payload: value
    }
}

export function updateFiveGalFiberlockPiranhaPaintStripper(value) {
    return {
        type: "UPDATE_FIVE_GALLON_FIBERLOCK_PIRANHA_PAINT_STRIPPER",
        payload: value
    }
}
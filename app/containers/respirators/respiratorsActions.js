export function calcTotalRespiratorsCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_RESPIRATORS_COST",
        payload: newTotal
    }
}

export function updateThreeMPAPRWCharger(value) {
    return {
        type: "UPDATE_3M_PAPR_WITH_CHARGER",
        payload: value
    }
}

export function updatePAPRFilters(value) {
    return {
        type: "UPDATE_PAPR_FILTERS",
        payload: value
    }
}

export function updateNorthHalf_MaskResp(value) {
    return {
        type: "UPDATE_NORTH_HALF_MASK_RESPIRATOR",
        payload: value
    }
}

export function updateP100Filters(value) {
    return {
        type: "UPDATE_P100_FILTERS",
        payload: value
    }
}

export function updateP100OrgVapFilters(value) {
    return {
        type: "UPDATE_P100_ORGANIC_VAPOR_STACK_FILTERS",
        payload: value
    }
}
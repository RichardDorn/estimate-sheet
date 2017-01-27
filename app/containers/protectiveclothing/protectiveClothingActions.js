export function calcTotalProtectiveClothingCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_PROTECTIVE_CLOTHING_COST",
        payload: newTotal
    }
}

export function updateXXXLTyvekSuits(value) {
    return {
        type: "UPDATE_XXXL_TYVEK_SUITS",
        payload: value
    }
}
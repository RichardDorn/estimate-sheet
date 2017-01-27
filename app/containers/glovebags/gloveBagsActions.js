export function calcTotalGloveBagsCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_GLOVEBAGS_COST",
        payload: newTotal
    }
}

export function updateFourtyFour_SixtyExtRunGB(value) {
    return {
        type: "UPDATE_FOURTY_FOUR_SIXTY_EXTENDED_RUN_GLOVE_BAGS",
        payload: value
    }
}
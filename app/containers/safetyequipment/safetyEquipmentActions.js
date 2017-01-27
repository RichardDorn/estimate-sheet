export function calcTotalSafetyEquipmentCost(newTotal) {
    return {
        type: "CALCULATE_TOTAL_SAFETYEQUIPMENT_COST",
        payload: newTotal
    }
}

export function updateSafetyGlasses(value) {
    return {
        type: "UPDATE_SAFETY_GLASSES",
        payload: value
    }
}

export function updateEightOzCottonGloves(value) {
    return {
        type: "UPDATE_EIGHT_OZ_COTTON_GLOVES",
        payload: value
    }
}

export function updateTwentyFiveManFirstAid(value) {
    return {
        type: "UPDATE_TWENTY_FIVE_MAN_FIRST_AID_KIT",
        payload: value
    }
}
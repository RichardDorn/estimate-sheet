export default function reducer(state={
    safetyGlassesQuantity: 0,
    safetyGlassesCost: 0,
    eightOzCottonGlovesQuantity: 0,
    eightOzCottonGlovesCost: 0,
    twentyFiveManFirstAidQuantity: 0,
    twentyFiveManFirstAidCost: 0,
    totalSafetyEquipmentCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_SAFETYEQUIPMENT_COST": {
            return {
                ...state,
                totalSafetyEquipmentCost: action.payload
            }
        }
            
        case "UPDATE_SAFETY_GLASSES": {
            return {
                ...state,
                safetyGlassesQuantity: action.payload,
                safetyGlassesCost: action.payload*3.50,
            }
        }

        case "UPDATE_EIGHT_OZ_COTTON_GLOVES": {
            return {
                ...state,
                eightOzCottonGlovesQuantity: action.payload,
                eightOzCottonGlovesCost: action.payload*6.00
            }
        }

        case "UPDATE_TWENTY_FIVE_MAN_FIRST_AID_KIT": {
            return {
                ...state,
                twentyFiveManFirstAidQuantity: action.payload,
                twentyFiveManFirstAidCost: action.payload*26.70
            }
        }
    }
    return state
}
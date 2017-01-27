export default function reducer(state={
    fourtyFour_SixtyExtRunGBQuantity: 0,
    fourtyFour_SixtyExtRunGBCost: 0,
    totalGloveBagsCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_GLOVEBAGS_COST": {
            return {
                ...state,
                totalGloveBagsCost: action.payload
            }
        }
            
        case "UPDATE_FOURTY_FOUR_SIXTY_EXTENDED_RUN_GLOVE_BAGS": {
            return {
                ...state,
                fourtyFour_SixtyExtRunGBQuantity: action.payload,
                fourtyFour_SixtyExtRunGBCost: action.payload*131.00,
            }
        }
    }
    return state
}
export default function reducer(state={
    xXXLTyvekSuitsQuantity: 0,
    xXXLTyvekSuitsCost: 0,
    totalProtectiveClothingCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_PROTECTIVE_CLOTHING_COST": {
            return {
                ...state,
                totalProtectiveClothingCost: action.payload
            }
        }
            
        case "UPDATE_XXXL_TYVEK_SUITS": {
            return {
                ...state,
                xXXLTyvekSuitsQuantity: action.payload,
                xXXLTyvekSuitsCost: action.payload*19.95,
            }
        }
    }
    return state
}
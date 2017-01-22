export default function reducer(state={
    four_TenClearQuantity: 0,
    four_TenClearCost: 0,
    four_TwentyEqQuantity: 0,
    four_TwentyEqCost: 0,
    four_TwentyQuantity: 0,
    four_TwentyCost: 0,
    four_TwentyBlackQuantity: 0,
    four_TwentyBlackCost: 0,
    six_TwentyEqQuantity: 0,
    six_TwentyEqCost: 0,
    six_TwentyClearQuantity: 0,
    six_TwentyClearCost: 0,
    six_TwentyBlackQuantity: 0,
    six_TwentyBlackCost: 0,
    totalPolyCost: 0
    }, action) {

        switch (action.type) {
            case "CALCULATE_TOTAL_POLY_COST": {
                return {
                    ...state,
                    totalPolyCost: action.payload
                }
            }
            
            case "UPDATE_FOUR_TEN_CLEAR": {
                return {
                    ...state,
                    four_TenClearQuantity: action.payload,
                    four_TenClearCost: action.payload*22.25,
                }
            }

            case "UPDATE_FOUR_TWENTY_EQ": {
                return {
                    ...state,
                    four_TwentyEqQuantity: action.payload,
                    four_TwentyEqCost: action.payload*1.00
                }
            }

            case "UPDATE_FOUR_TWENTY": {
                return {
                    ...state,
                    four_TwentyQuantity: action.payload,
                    four_TwentyCost: action.payload*43.80
                }
            }

            case "UPDATE_FOUR_TWENTY_BLACK": {
                return {
                    ...state,
                    four_TwentyBlackQuantity: action.payload,
                    four_TwentyBlackCost: action.payload*43.00
                }
            }

            case "UPDATE_SIX_TWENTY_EQ": {
                return {
                    ...state,
                    six_TwentyEqQuantity: action.payload,
                    six_TwentyEqCost: action.payload*48.50
                }
            }

            case "UPDATE_SIX_TWENTY_CLEAR": {
                return {
                    ...state,
                    six_TwentyClearQuantity: action.payload,
                    six_TwentyClearCost: action.payload*70.50
                }
            }

            case "UPDATE_SIX_TWENTY_BLACK": {
                return {
                    ...state,
                    six_TwentyBlackQuantity: action.payload,
                    six_TwentyBlackCost: action.payload*60.00
                }
            }
        }
    return state
}
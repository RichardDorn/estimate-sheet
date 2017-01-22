export default function reducer(state={
    thirtyEight_SixtyClearGenDebQuantity: 0,
    thirtyEight_SixtyClearGenDebCost: 0,
    fiberBarrelsQuantity: 0,
    fiberBarrelsCost: 0,
    thirty_FortyClearABQuantity: 0,
    thirty_FortyClearABCost: 0,
    thirty_FortyBlackABQuantity: 0,
    thirty_FortyBlackABCost: 0,
    totalBagsBarrelsCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_BAGSBARRELS_COST": {
            return {
                ...state,
                totalBagsBarrelsCost: action.payload
            }
        }
            
        case "UPDATE_THIRTYEIGHT_SIXTY_CLEAR_GEN_DEB": {
            return {
                ...state,
                thirtyEight_SixtyClearGenDebQuantity: action.payload,
                thirtyEight_SixtyClearGenDebCost: action.payload*25.00,
            }
        }

        case "UPDATE_FIBER_BARRELS": {
            return {
                ...state,
                fiberBarrelsQuantity: action.payload,
                fiberBarrelsCost: action.payload*13.51
            }
        }

        case "UPDATE_THIRTY_FORTY_CLEAR_AB": {
            return {
                ...state,
                thirty_FortyClearABQuantity: action.payload,
                thirty_FortyClearABCost: action.payload*31.50
            }
        }

        case "UPDATE_THIRTY_FORTY_BLACK_AB": {
            return {
                ...state,
                thirty_FortyBlackABQuantity: action.payload,
                thirty_FortyBlackABCost: action.payload*31.50
            }
        }
    }
    return state
}
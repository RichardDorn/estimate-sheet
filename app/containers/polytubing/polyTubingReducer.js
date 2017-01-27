export default function reducer(state={
    fourMilLayFlatTubingQuantity: 0,
    fourMilLayFlatTubingCost: 0,
    totalPolyTubingCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_POLYTUBING_COST": {
            return {
                ...state,
                totalPolyTubingCost: action.payload
            }
        }
            
        case "UPDATE_FOUR_MIL_LAYFLAT_TUBING": {
            return {
                ...state,
                fourMilLayFlatTubingQuantity: action.payload,
                fourMilLayFlatTubingCost: action.payload*45.00,
            }
        }
    }
    return state
}
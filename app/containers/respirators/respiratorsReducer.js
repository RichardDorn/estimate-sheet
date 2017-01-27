export default function reducer(state={
    threeMPAPRWChargerQuantity: 0,
    threeMPAPRWChargerCost: 0,
    pAPRFiltersQuantity: 0,
    pAPRFiltersCost: 0,
    northHalf_MaskRespQuantity: 0,
    northHalf_MaskRespCost: 0,
    p100FiltersQuantity: 0,
    p100FiltersCost: 0,
    p100OrgVapFiltersQuantity: 0,
    p100OrgVapFiltersCost: 0,
    totalRespiratorsCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_RESPIRATORS_COST": {
            return {
                ...state,
                totalRespiratorsCost: action.payload
            }
        }
            
        case "UPDATE_3M_PAPR_WITH_CHARGER": {
            return {
                ...state,
                threeMPAPRWChargerQuantity: action.payload,
                threeMPAPRWChargerCost: action.payload*1.00,
            }
        }

        case "UPDATE_PAPR_FILTERS": {
            return {
                ...state,
                pAPRFiltersQuantity: action.payload,
                pAPRFiltersCost: action.payload*1.00
            }
        }

        case "UPDATE_NORTH_HALF_MASK_RESPIRATOR": {
            return {
                ...state,
                northHalf_MaskRespQuantity: action.payload,
                northHalf_MaskRespCost: action.payload*23.00
            }
        }

        case "UPDATE_P100_FILTERS": {
            return {
                ...state,
                p100FiltersQuantity: action.payload,
                p100FiltersCost: action.payload*5.26
            }
        }

        case "UPDATE_P100_ORGANIC_VAPOR_STACK_FILTERS": {
            return {
                ...state,
                p100OrgVapFiltersQuantity: action.payload,
                p100OrgVapFiltersCost: action.payload*15.90
            }
        }
    }
    return state
}
export default function reducer(state={
    fiftyMicWaterQuantity: 0,
    fiftyMicWaterCost: 0,
    twentyMicWaterQuantity: 0,
    twentyMicWaterCost: 0,
    fiveMicWaterQuantity: 0,
    fiveMicWaterCost: 0,
    negAirPrimeQuantity: 0,
    negAirPrimeCost: 0,
    negAirSecondQuantity: 0,
    negAirSecondCost: 0,
    negAirHEPAQuantity: 0,
    negAirHEPACost: 0,
    totalFiltersCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_FILTERS_COST": {
            return {
                ...state,
                totalFiltersCost: action.payload
            }
        }
            
        case "UPDATE_FIFTY_MICRON_WATER_FILTERS": {
            return {
                ...state,
                fiftyMicWaterQuantity: action.payload,
                fiftyMicWaterCost: action.payload*3.50,
            }
        }

        case "UPDATE_TWENTY_MICRON_WATER_FILTERS": {
            return {
                ...state,
                twentyMicWaterQuantity: action.payload,
                twentyMicWaterCost: action.payload*3.50
            }
        }

        case "UPDATE_FIVE_MICRON_WATER_FILTERS": {
            return {
                ...state,
                fiveMicWaterQuantity: action.payload,
                fiveMicWaterCost: action.payload*3.50
            }
        }

        case "UPDATE_NEG_AIR_PRIMARY_FILTERS": {
            return {
                ...state,
                negAirPrimeQuantity: action.payload,
                negAirPrimeCost: action.payload*29.99
            }
        }

        case "UPDATE_NEG_AIR_SECONDARY_FILTERS": {
            return {
                ...state,
                negAirSecondQuantity: action.payload,
                negAirSecondCost: action.payload*40.62
            }
        }

        case "UPDATE_NEG_AIR_HEPA_FILTER": {
            return {
                ...state,
                negAirHEPArQuantity: action.payload,
                negAirHEPArCost: action.payload*114
            }
        }
    }
    return state
}
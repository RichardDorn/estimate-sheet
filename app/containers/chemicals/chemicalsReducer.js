export default function reducer(state={
    fiveGalMasticRemoverQuantity: 0,
    fiveGalMasticRemoverCost: 0,
    fiftyFiveGalMasticRemoverQuantity: 0,
    fiftyFiveGalMasticRemoverCost: 0,
    sprayGlueQuantity: 0,
    sprayGlueCost: 0,
    fiveGalFibersetPMClearQuantity: 0,
    fiveGalFibersetPMClearCost: 0,
    fiveGalFibersetPMWhiteQuantity: 0,
    fiveGalFibersetPMWhiteCost: 0,
    fiveGalFiberlockPiranhaPaintStripperQuantity: 0,
    fiveGalFiberlockPiranhaPaintStripperCost: 0,
    totalChemicalsCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_CHEMICALS_COST": {
            return {
                ...state,
                totalChemicalsCost: action.payload
            }
        }
            
        case "UPDATE_FIVE_GALLON_MASTIC_REMOVER": {
            return {
                ...state,
                fiveGalMasticRemoverQuantity: action.payload,
                fiveGalMasticRemoverCost: action.payload*55.00,
            }
        }

        case "UPDATE_FIFTY_FIVE_GALLON_MASTIC_REMOVER": {
            return {
                ...state,
                fiftyFiveGalMasticRemoverQuantity: action.payload,
                fiftyFiveGalMasticRemoverCost: action.payload*530.00
            }
        }

        case "UPDATE_SPRAY_GLUE": {
            return {
                ...state,
                sprayGlueQuantity: action.payload,
                sprayGlueCost: action.payload*34.50
            }
        }

        case "UPDATE_FIVE_GALLON_FIBERSET_PM_CLEAR": {
            return {
                ...state,
                fiveGalFibersetPMClearQuantity: action.payload,
                fiveGalFibersetPMClearCost: action.payload*38.50
            }
        }

        case "UPDATE_FIVE_GALLON_FIBERSET_PM_WHITE": {
            return {
                ...state,
                fiveGalFibersetPMWhiteQuantity: action.payload,
                fiveGalFibersetPMWhiteCost: action.payload*44.50
            }
        }

        case "UPDATE_FIVE_GALLON_FIBERLOCK_PIRANHA_PAINT_STRIPPER": {
            return {
                ...state,
                fiveGalFiberlockPiranhaPaintStripperQuantity: action.payload,
                fiveGalFiberlockPiranhaPaintStripperCost: action.payload*108.45
            }
        }
    }
    return state
}
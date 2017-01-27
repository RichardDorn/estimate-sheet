export default function reducer(state={
    toothBrushQuantity: 0,
    toothBrushCost: 0,
    three_NinteenLongBrushQuantity: 0,
    three_NinteenLongBrushCost: 0,
    fourInchWallScrapeQuantity: 0,
    fourInchWallScrapeCost: 0,
    bladesQuantity: 0,
    bladesCost: 0,
    spudBladesQuantity: 0,
    spudBladesCost: 0,
    plasticB_ScoopShovelQuantity: 0,
    plasticB_ScoopShovelCost: 0,
    totalHandToolsCost: 0
}, action) {

    switch (action.type) {
        case "CALCULATE_TOTAL_HANDTOOLS_COST": {
            return {
                ...state,
                totalHandToolsCost: action.payload
            }
        }
            
        case "UPDATE_TOOTH_BRUSH": {
            return {
                ...state,
                toothBrushQuantity: action.payload,
                toothBrushCost: action.payload*0.70,
            }
        }

        case "UPDATE_THREE_NINTEEN_LONG_HANDLE_BRUSH": {
            return {
                ...state,
                three_NinteenLongBrushQuantity: action.payload,
                three_NinteenLongBrushCost: action.payload*2.39
            }
        }

        case "UPDATE_FOUR_INCH_WALL_SCRAPER": {
            return {
                ...state,
                fourInchWallScrapeQuantity: action.payload,
                fourInchWallScrapeCost: action.payload*5.25
            }
        }

        case "UPDATE_BLADES": {
            return {
                ...state,
                bladesQuantity: action.payload,
                bladesCost: action.payload*2.11
            }
        }

        case "UPDATE_SPUD_BAR_BLADES": {
            return {
                ...state,
                spudBladesQuantity: action.payload,
                spudBladesCost: action.payload*10.80
            }
        }

        case "UPDATE_PLASTIC_B_SCOOP_SHOVEL": {
            return {
                ...state,
                plasticB_ScoopShovelQuantity: action.payload,
                plasticB_ScoopShovelCost: action.payload*17.50
            }
        }
    }
    return state
}
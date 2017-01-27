import {combineReducers} from "redux";
import projectInfo from "../containers/projectinfo/projectInfoReducer";
import clientContactInfo from "../containers/projectinfo/clientContactInfoReducer";
import polySheeting from "../containers/polysheeting/polySheetingReducer";
import bagsBarrels from "../containers/bagsbarrels/bagsBarrelsReducer";
import polyTubing from "../containers/polytubing/polyTubingReducer";
import gloveBags from "../containers/glovebags/gloveBagsReducer";
import protectiveClothing from "../containers/protectiveclothing/protectiveClothingReducer";
import chemicals from "../containers/chemicals/chemicalsReducer";
import filters from "../containers/filters/filtersReducer";
import handTools from "../containers/handtools/handToolsReducer";
import respirators from "../containers/respirators/respiratorsReducer";
import safetyEquipment from "../containers/safetyequipment/safetyEquipmentReducer";

export default combineReducers({
    projectInfo,
    clientContactInfo,
    polySheeting,
    bagsBarrels,
    polyTubing,
    gloveBags,
    protectiveClothing,
    chemicals,
    filters,
    handTools,
    respirators,
    safetyEquipment,
})
import {combineReducers} from "redux";
import projectInfo from "../containers/projectinfo/projectInfoReducer";
import clientContactInfo from "../containers/projectinfo/clientContactInfoReducer";
import polySheeting from "../containers/polysheeting/polySheetingReducer";
import bagsBarrels from "../containers/bagsbarrels/bagsBarrelsReducer";

export default combineReducers({
    projectInfo,
    clientContactInfo,
    polySheeting,
    bagsBarrels,
})
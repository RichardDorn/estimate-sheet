import {combineReducers} from "redux";
import polySheeting from "../containers/polysheeting/polySheetingReducer";
import clientContactInfo from "../containers/projectinfo/clientContactInfoReducer";
import projectInfo from "../containers/projectinfo/projectInfoReducer";

export default combineReducers({
    projectInfo,
    clientContactInfo,
    polySheeting,
})
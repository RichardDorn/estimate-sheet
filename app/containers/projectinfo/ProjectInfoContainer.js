import React from "react";
import ProjectInfo from "../../components/ProjectInfo";
import {connect} from "react-redux";
import {updateEstimateNumber} from "./projectInfoActions";
import {updateProjectAddress} from "./projectInfoActions";

@connect((store) => {
    return {
        estimateNumber: store.projectInfo.estimateNumber,
        projectAddress: store.projectInfo.projectAddress,
    };
})

export default class ProjectInfoContainer extends React.Component {

    handleUpdateEstimateNumber(e){
        var value = e.target.value;
        this.props.dispatch(updateEstimateNumber(value));
    }

    handleUpdateProjectAddress(e){
        var value = e.target.value;
        this.props.dispatch(updateProjectAddress(value));
    }
    
    render() {
        return (
            <ProjectInfo 
                onUpdateEstimateNumber={this.handleUpdateEstimateNumber.bind(this)}
                onUpdateProjectAddress={this.handleUpdateProjectAddress.bind(this)}
                estimateNumber={this.props.estimateNumber}
                projectAddress={this.props.projectAddress} />
            );
    }
};
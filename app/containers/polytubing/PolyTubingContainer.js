import React from "react";
import PolyTubing from "../../components/PolyTubing";
import {connect} from "react-redux";
import {updateFourMilLayFlatTubing} from "./polyTubingActions";
import {calcTotalPolyTubingCost} from "./polyTubingActions";

@connect((store) => {
    return {
        fourMilLayFlatTubingQuantity: store.polyTubing.fourMilLayFlatTubingQuantity,
        fourMilLayFlatTubingCost: store.polyTubing.fourMilLayFlatTubingCost,
    };
})

export default class PolyTubingContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.fourMilLayFlatTubingCost;
        this.props.dispatch(calcTotalPolyTubingCost(newTotal.toFixed(2)));
    }

    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }
    
    handleUpdateFourMilLayFlatTubing(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFourMilLayFlatTubing);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <PolyTubing
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateFourMilLayFlatTubing={this.handleUpdateFourMilLayFlatTubing.bind(this)}
                    fourMilLayFlatTubingQuantity={this.props.fourMilLayFlatTubingQuantity}
                    fourMilLayFlatTubingCost={this.props.fourMilLayFlatTubingCost} />
        );
    }
};
import React from "react";
import ProtectiveClothing from "../../components/ProtectiveClothing";
import {connect} from "react-redux";
import {updateXXXLTyvekSuits} from "./protectiveClothingActions";
import {calcTotalProtectiveClothingCost} from "./protectiveClothingActions";

@connect((store) => {
    return {
        xXXLTyvekSuitsQuantity: store.protectiveClothing.xXXLTyvekSuitsQuantity,
        xXXLTyvekSuitsCost: store.protectiveClothing.xXXLTyvekSuitsCost,
    };
})

export default class ProtectiveClothingContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.xXXLTyvekSuitsCost;
        this.props.dispatch(calcTotalProtectiveClothingCost(newTotal.toFixed(2)));
    }

    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }
    
    handleUpdateXXXLTyvekSuits(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateXXXLTyvekSuits);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <ProtectiveClothing
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateXXXLTyvekSuits={this.handleUpdateXXXLTyvekSuits.bind(this)}
                    xXXLTyvekSuitsQuantity={this.props.xXXLTyvekSuitsQuantity}
                    xXXLTyvekSuitsCost={this.props.xXXLTyvekSuitsCost} />
        );
    }
};
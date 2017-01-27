import React from "react";
import GloveBags from "../../components/GloveBags";
import {connect} from "react-redux";
import {updateFourtyFour_SixtyExtRunGB} from "./gloveBagsActions";
import {calcTotalGloveBagsCost} from "./gloveBagsActions";

@connect((store) => {
    return {
        fourtyFour_SixtyExtRunGBQuantity: store.gloveBags.fourtyFour_SixtyExtRunGBQuantity,
        fourtyFour_SixtyExtRunGBCost: store.gloveBags.fourtyFour_SixtyExtRunGBCost,
    };
})

export default class GloveBagsContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.fourtyFour_SixtyExtRunGBCost;
        this.props.dispatch(calcTotalGloveBagsCost(newTotal.toFixed(2)));
    }

    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }
    
    handleUpdateFourtyFour_SixtyExtRunGB(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFourtyFour_SixtyExtRunGB);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <GloveBags
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateFourtyFour_SixtyExtRunGB={this.handleUpdateFourtyFour_SixtyExtRunGB.bind(this)}
                    fourtyFour_SixtyExtRunGBQuantity={this.props.fourtyFour_SixtyExtRunGBQuantity}
                    fourtyFour_SixtyExtRunGBCost={this.props.fourtyFour_SixtyExtRunGBCost} />
        );
    }
};
import React from "react";
import BagsBarrels from "../../components/BagsBarrels";
import {connect} from "react-redux";
import {updateThirtyEight_SixtyClearGenDeb} from "./bagsBarrelsActions";
import {updateFiberBarrels} from "./bagsBarrelsActions";
import {updateThirty_FortyClearAB} from "./bagsBarrelsActions";
import {updateThirty_FortyBlackAB} from "./bagsBarrelsActions";
import {calcTotalBagsBarrelsCost} from "./bagsBarrelsActions";

@connect((store) => {
    return {
        thirtyEight_SixtyClearGenDebQuantity: store.bagsBarrels.thirtyEight_SixtyClearGenDebQuantity,
        thirtyEight_SixtyClearGenDebCost: store.bagsBarrels.thirtyEight_SixtyClearGenDebCost,
        fiberBarrelsQuantity: store.bagsBarrels.fiberBarrelsQuantity,
        fiberBarrelsCost: store.bagsBarrels.fiberBarrelsCost,
        thirty_FortyClearABQuantity: store.bagsBarrels.thirty_FortyClearABQuantity,
        thirty_FortyClearABCost: store.bagsBarrels.thirty_FortyClearABCost,
        thirty_FortyBlackABQuantity: store.bagsBarrels.thirty_FortyBlackABQuantity,
        thirty_FortyBlackABCost: store.bagsBarrels.thirty_FortyBlackABCost,
    };
})

export default class BagsBarrelsContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.thirtyEight_SixtyClearGenDebCost + this.props.fiberBarrelsCost + this.props.thirty_FortyClearABCost + this.props.thirty_FortyBlackABCost;
        this.props.dispatch(calcTotalBagsBarrelsCost(newTotal.toFixed(2)));
    }
    
    handleUpdateThirtyEight_SixtyClearGenDeb(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateThirtyEight_SixtyClearGenDeb(value));
    }

    handleUpdateFiberBarrels(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateFiberBarrels(value));
    }

    handleUpdateThirty_FortyClearAB(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateThirty_FortyClearAB(value));
    }

    handleUpdateThirty_FortyBlackAB(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateThirty_FortyBlackAB(value));
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <BagsBarrels
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateThirtyEight_SixtyClearGenDeb={this.handleUpdateThirtyEight_SixtyClearGenDeb.bind(this)}
                    thirtyEight_SixtyClearGenDebQuantity={this.props.thirtyEight_SixtyClearGenDebQuantity}
                    thirtyEight_SixtyClearGenDebCost={this.props.thirtyEight_SixtyClearGenDebCost}
                    
                    onUpdateFiberBarrels={this.handleUpdateFiberBarrels.bind(this)}
                    fiberBarrelsQuantity={this.props.fiberBarrelsQuantity}
                    fiberBarrelsCost={this.props.fiberBarrelsCost}
                    
                    onUpdateThirty_FortyClearAB={this.handleUpdateThirty_FortyClearAB.bind(this)}
                    thirty_FortyClearABQuantity={this.props.thirty_FortyClearABQuantity}
                    thirty_FortyClearABCost={this.props.thirty_FortyClearABCost}
                    
                    onUpdateThirty_FortyBlackAB={this.handleUpdateThirty_FortyBlackAB.bind(this)}
                    thirty_FortyBlackABQuantity={this.props.thirty_FortyBlackABQuantity}
                    thirty_FortyBlackABCost={this.props.thirty_FortyBlackABCost} />
            );
    }
};
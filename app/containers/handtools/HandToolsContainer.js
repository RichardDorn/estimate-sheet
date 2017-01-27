import React from "react";
import HandTools from "../../components/HandTools";
import {connect} from "react-redux";
import {updateToothBrush} from "./handToolsActions";
import {updateThree_NinteenLongBrush} from "./handToolsActions";
import {updateFourInchWallScrape} from "./handToolsActions";
import {updateBlades} from "./handToolsActions";
import {updateSpudBlades} from "./handToolsActions";
import {updatePlasticB_ScoopShovel} from "./handToolsActions";
import {calcTotalHandToolsCost} from "./handToolsActions";

@connect((store) => {
    return {
        toothBrushQuantity: store.handTools.toothBrushQuantity,
        toothBrushCost: store.handTools.toothBrushCost,
        three_NinteenLongBrushQuantity: store.handTools.three_NinteenLongBrushQuantity,
        three_NinteenLongBrushCost: store.handTools.three_NinteenLongBrushCost,
        fourInchWallScrapeQuantity: store.handTools.fourInchWallScrapeQuantity,
        fourInchWallScrapeCost: store.handTools.fourInchWallScrapeCost,
        bladesQuantity: store.handTools.bladesQuantity,
        bladesCost: store.handTools.bladesCost,
        spudBladesQuantity: store.handTools.spudBladesQuantity,
        spudBladesCost: store.handTools.spudBladesCost,
        plasticB_ScoopShovelQuantity: store.handTools.plasticB_ScoopShovelQuantity,
        plasticB_ScoopShovelCost: store.handTools.plasticB_ScoopShovelCost,
    };
})

export default class HandToolsContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.toothBrushCost + this.props.three_NinteenLongBrushCost + this.props.fourInchWallScrapeCost + this.props.bladesCost +this.props. spudBladesCost + this.props.plasticB_ScoopShovelCost;
        this.props.dispatch(calcTotalHandToolsCost(newTotal.toFixed(2)));
    }
    
    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }

    handleUpdateToothBrush(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateToothBrush);
    }

    handleUpdateThree_NinteenLongBrush(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateThree_NinteenLongBrush);
    }

    handleUpdateFourInchWallScrape(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFourInchWallScrape);
    }

    handleUpdateBlades(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateBlades);
    }

    handleUpdateSpudBlades(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateSpudBlades);
    }

    handleUpdatePlasticB_ScoopShovel(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updatePlasticB_ScoopShovel);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <HandTools
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateToothBrush={this.handleUpdateToothBrush.bind(this)}
                    toothBrushQuantity={this.props.toothBrushQuantity}
                    toothBrushCost={this.props.toothBrushCost}
                    
                    onUpdateThree_NinteenLongBrush={this.handleUpdateThree_NinteenLongBrush.bind(this)}
                    three_NinteenLongBrushQuantity={this.props.three_NinteenLongBrushQuantity}
                    three_NinteenLongBrushCost={this.props.three_NinteenLongBrushCost}
                    
                    onUpdateFourInchWallScrape={this.handleUpdateFourInchWallScrape.bind(this)}
                    fourInchWallScrapeQuantity={this.props.fourInchWallScrapeQuantity}
                    fourInchWallScrapeCost={this.props.fourInchWallScrapeCost}
                    
                    onUpdateBlades={this.handleUpdateBlades.bind(this)}
                    bladesQuantity={this.props.bladesQuantity}
                    bladesCost={this.props.bladesCost}
                    
                    onUpdateSpudBlades={this.handleUpdateSpudBlades.bind(this)}
                    spudBladesQuantity={this.props.spudBladesQuantity}
                    spudBladesCost={this.props.spudBladesCost}
                    
                    onUpdatePlasticB_ScoopShovel={this.handleUpdatePlasticB_ScoopShovel.bind(this)}
                    plasticB_ScoopShovelQuantity={this.props.plasticB_ScoopShovelQuantity}
                    plasticB_ScoopShovelCost={this.props.plasticB_ScoopShovelCost} />
            );
        }
};
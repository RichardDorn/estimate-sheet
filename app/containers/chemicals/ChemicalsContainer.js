import React from "react";
import Chemicals from "../../components/Chemicals";
import {connect} from "react-redux";
import {updateFiveGalMasticRemover} from "./chemicalsActions";
import {updateFiftyFiveGalMasticRemover} from "./chemicalsActions";
import {updateSprayGlue} from "./chemicalsActions";
import {updateFiveGalFibersetPMClear} from "./chemicalsActions";
import {updateFiveGalFibersetPMWhite} from "./chemicalsActions";
import {updateFiveGalFiberlockPiranhaPaintStripper} from "./chemicalsActions";
import {calcTotalChemicalsCost} from "./chemicalsActions";

@connect((store) => {
    return {
        fiveGalMasticRemoverQuantity: store.chemicals.fiveGalMasticRemoverQuantity,
        fiveGalMasticRemoverCost: store.chemicals.fiveGalMasticRemoverCost,
        fiftyFiveGalMasticRemoverQuantity: store.chemicals.fiftyFiveGalMasticRemoverQuantity,
        fiftyFiveGalMasticRemoverCost: store.chemicals.fiftyFiveGalMasticRemoverCost,
        sprayGlueQuantity: store.chemicals.sprayGlueQuantity,
        sprayGlueCost: store.chemicals.sprayGlueCost,
        fiveGalFibersetPMClearQuantity: store.chemicals.fiveGalFibersetPMClearQuantity,
        fiveGalFibersetPMClearCost: store.chemicals.fiveGalFibersetPMClearCost,
        fiveGalFibersetPMWhiteQuantity: store.chemicals.fiveGalFibersetPMWhiteQuantity,
        fiveGalFibersetPMWhiteCost: store.chemicals.fiveGalFibersetPMWhiteCost,
        fiveGalFiberlockPiranhaPaintStripperQuantity: store.chemicals.fiveGalFiberlockPiranhaPaintStripperQuantity,
        fiveGalFiberlockPiranhaPaintStripperCost: store.chemicals.fiveGalFiberlockPiranhaPaintStripperCost,
    };
})

export default class ChemicalsContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.fiveGalMasticRemoverCost + this.props.fiftyFiveGalMasticRemoverCost + this.props.sprayGlueCost + this.props.fiveGalFibersetPMClearCost +this.props. fiveGalFibersetPMWhiteCost + this.props.fiveGalFiberlockPiranhaPaintStripperCost;
        this.props.dispatch(calcTotalChemicalsCost(newTotal.toFixed(2)));
    }
    
    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }

    handleUpdateFiveGalMasticRemover(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFiveGalMasticRemover);
    }

    handleUpdateFiftyFiveGalMasticRemover(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFiftyFiveGalMasticRemover);
    }

    handleUpdateSprayGlue(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateSprayGlue);
    }

    handleUpdateFiveGalFibersetPMClear(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFiveGalFibersetPMClear);
    }

    handleUpdateFiveGalFibersetPMWhite(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFiveGalFibersetPMWhite);
    }

    handleUpdateFiveGalFiberlockPiranhaPaintStripper(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFiveGalFiberlockPiranhaPaintStripper);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <Chemicals
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateFiveGalMasticRemover={this.handleUpdateFiveGalMasticRemover.bind(this)}
                    fiveGalMasticRemoverQuantity={this.props.fiveGalMasticRemoverQuantity}
                    fiveGalMasticRemoverCost={this.props.fiveGalMasticRemoverCost}
                    
                    onUpdateFiftyFiveGalMasticRemover={this.handleUpdateFiftyFiveGalMasticRemover.bind(this)}
                    fiftyFiveGalMasticRemoverQuantity={this.props.fiftyFiveGalMasticRemoverQuantity}
                    fiftyFiveGalMasticRemoverCost={this.props.fiftyFiveGalMasticRemoverCost}
                    
                    onUpdateSprayGlue={this.handleUpdateSprayGlue.bind(this)}
                    sprayGlueQuantity={this.props.sprayGlueQuantity}
                    sprayGlueCost={this.props.sprayGlueCost}
                    
                    onUpdateFiveGalFibersetPMClear={this.handleUpdateFiveGalFibersetPMClear.bind(this)}
                    fiveGalFibersetPMClearQuantity={this.props.fiveGalFibersetPMClearQuantity}
                    fiveGalFibersetPMClearCost={this.props.fiveGalFibersetPMClearCost}
                    
                    onUpdateFiveGalFibersetPMWhite={this.handleUpdateFiveGalFibersetPMWhite.bind(this)}
                    fiveGalFibersetPMWhiteQuantity={this.props.fiveGalFibersetPMWhiteQuantity}
                    fiveGalFibersetPMWhiteCost={this.props.fiveGalFibersetPMWhiteCost}
                    
                    onUpdateFiveGalFiberlockPiranhaPaintStripper={this.handleUpdateFiveGalFiberlockPiranhaPaintStripper.bind(this)}
                    fiveGalFiberlockPiranhaPaintStripperQuantity={this.props.fiveGalFiberlockPiranhaPaintStripperQuantity}
                    fiveGalFiberlockPiranhaPaintStripperCost={this.props.fiveGalFiberlockPiranhaPaintStripperCost} />
        );
    }
};
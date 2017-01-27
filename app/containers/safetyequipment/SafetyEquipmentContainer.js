import React from "react";
import SafetyEquipment from "../../components/SafetyEquipment";
import {connect} from "react-redux";
import {updateSafetyGlasses} from "./safetyEquipmentActions";
import {updateEightOzCottonGloves} from "./safetyEquipmentActions";
import {updateTwentyFiveManFirstAid} from "./safetyEquipmentActions";
import {calcTotalSafetyEquipmentCost} from "./safetyEquipmentActions";

@connect((store) => {
    return {
        safetyGlassesQuantity: store.safetyEquipment.safetyGlassesQuantity,
        safetyGlassesCost: store.safetyEquipment.safetyGlassesCost,
        eightOzCottonGlovesQuantity: store.safetyEquipment.eightOzCottonGlovesQuantity,
        eightOzCottonGlovesCost: store.safetyEquipment.eightOzCottonGlovesCost,
        twentyFiveManFirstAidQuantity: store.safetyEquipment.twentyFiveManFirstAidQuantity,
        twentyFiveManFirstAidCost: store.safetyEquipment.twentyFiveManFirstAidCost,
    };
})

export default class SafetyEquipmentContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.safetyGlassesCost + this.props.eightOzCottonGlovesCost + this.props.twentyFiveManFirstAidCost;
        this.props.dispatch(calcTotalSafetyEquipmentCost(newTotal.toFixed(2)));
    }

    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }
    
    handleUpdateSafetyGlasses(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateSafetyGlasses);
    }

    handleUpdateEightOzCottonGloves(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateEightOzCottonGloves);
    }

    handleUpdateTwentyFiveManFirstAid(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateTwentyFiveManFirstAid);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <SafetyEquipment
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateSafetyGlasses={this.handleUpdateSafetyGlasses.bind(this)}
                    safetyGlassesQuantity={this.props.safetyGlassesQuantity}
                    safetyGlassesCost={this.props.safetyGlassesCost}
                    
                    onUpdateEightOzCottonGloves={this.handleUpdateEightOzCottonGloves.bind(this)}
                    eightOzCottonGlovesQuantity={this.props.eightOzCottonGlovesQuantity}
                    eightOzCottonGlovesCost={this.props.eightOzCottonGlovesCost}
                    
                    onUpdateTwentyFiveManFirstAid={this.handleUpdateTwentyFiveManFirstAid.bind(this)}
                    twentyFiveManFirstAidQuantity={this.props.twentyFiveManFirstAidQuantity}
                    twentyFiveManFirstAidCost={this.props.twentyFiveManFirstAidCost} />
            );
        }
};
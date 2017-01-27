import React from "react";
import Filters from "../../components/Filters";
import {connect} from "react-redux";
import {updateFiftyMicWater} from "./filtersActions";
import {updateTwentyMicWater} from "./filtersActions";
import {updateFiveMicWater} from "./filtersActions";
import {updateNegAirPrime} from "./filtersActions";
import {updateNegAirSecond} from "./filtersActions";
import {updateNegAirHEPA} from "./filtersActions";
import {calcTotalFiltersCost} from "./filtersActions";

@connect((store) => {
    return {
        fiftyMicWaterQuantity: store.filters.fiftyMicWaterQuantity,
        fiftyMicWaterCost: store.filters.fiftyMicWaterCost,
        twentyMicWaterQuantity: store.filters.twentyMicWaterQuantity,
        twentyMicWaterCost: store.filters.twentyMicWaterCost,
        fiveMicWaterQuantity: store.filters.fiveMicWaterQuantity,
        fiveMicWaterCost: store.filters.fiveMicWaterCost,
        negAirPrimeQuantity: store.filters.negAirPrimeQuantity,
        negAirPrimeCost: store.filters.negAirPrimeCost,
        negAirSecondQuantity: store.filters.negAirSecondQuantity,
        negAirSecondCost: store.filters.negAirSecondCost,
        negAirHEPAQuantity: store.filters.negAirHEPAQuantity,
        negAirHEPACost: store.filters.negAirHEPACost,
    };
})

export default class FiltersContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.fiftyMicWaterCost + this.props.twentyMicWaterCost + this.props.fiveMicWaterCost + this.props.negAirPrimeCost +this.props. negAirSecondCost + this.props.negAirHEPACost;
        this.props.dispatch(calcTotalFiltersCost(newTotal.toFixed(2)));
    }
    
    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }

    handleUpdateFiftyMicWater(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFiftyMicWater);
    }

    handleUpdateTwentyMicWater(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateTwentyMicWater);
    }

    handleUpdateFiveMicWater(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateFiveMicWater);
    }

    handleUpdateNegAirPrime(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateNegAirPrime);
    }

    handleUpdateNegAirSecond(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateNegAirSecond);
    }

    handleUpdateNegAirHEPA(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateNegAirHEPA);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <Filters
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateFiftyMicWater={this.handleUpdateFiftyMicWater.bind(this)}
                    fiftyMicWaterQuantity={this.props.fiftyMicWaterQuantity}
                    fiftyMicWaterCost={this.props.fiftyMicWaterCost}
                    
                    onUpdateTwentyMicWater={this.handleUpdateTwentyMicWater.bind(this)}
                    twentyMicWaterQuantity={this.props.twentyMicWaterQuantity}
                    twentyMicWaterCost={this.props.twentyMicWaterCost}
                    
                    onUpdateFiveMicWater={this.handleUpdateFiveMicWater.bind(this)}
                    fiveMicWaterQuantity={this.props.fiveMicWaterQuantity}
                    fiveMicWaterCost={this.props.fiveMicWaterCost}
                    
                    onUpdateNegAirPrime={this.handleUpdateNegAirPrime.bind(this)}
                    negAirPrimeQuantity={this.props.negAirPrimeQuantity}
                    negAirPrimeCost={this.props.negAirPrimeCost}
                    
                    onUpdateNegAirSecond={this.handleUpdateNegAirSecond.bind(this)}
                    negAirSecondQuantity={this.props.negAirSecondQuantity}
                    negAirSecondCost={this.props.negAirSecondCost}
                    
                    onUpdateNegAirHEPA={this.handleUpdateNegAirHEPA.bind(this)}
                    negAirHEPAQuantity={this.props.negAirHEPAQuantity}
                    negAirHEPACost={this.props.negAirHEPACost} />
);
}
};
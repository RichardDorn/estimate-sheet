import React from "react";
import Respirators from "../../components/Respirators";
import {connect} from "react-redux";
import {updateThreeMPAPRWCharger} from "./respiratorsActions";
import {updatePAPRFilters} from "./respiratorsActions";
import {updateNorthHalf_MaskResp} from "./respiratorsActions";
import {updateP100Filters} from "./respiratorsActions";
import {updateP100OrgVapFilters} from "./respiratorsActions";
import {calcTotalRespiratorsCost} from "./respiratorsActions";

@connect((store) => {
    return {
        threeMPAPRWChargerQuantity: store.respirators.threeMPAPRWChargerQuantity,
        threeMPAPRWChargerCost: store.respirators.threeMPAPRWChargerCost,
        pAPRFiltersQuantity: store.respirators.pAPRFiltersQuantity,
        pAPRFiltersCost: store.respirators.pAPRFiltersCost,
        northHalf_MaskRespQuantity: store.respirators.northHalf_MaskRespQuantity,
        northHalf_MaskRespCost: store.respirators.northHalf_MaskRespCost,
        p100FiltersQuantity: store.respirators.p100FiltersQuantity,
        p100FiltersCost: store.respirators.p100FiltersCost,
        p100OrgVapFiltersQuantity: store.respirators.p100OrgVapFiltersQuantity,
        p100OrgVapFiltersCost: store.respirators.p100OrgVapFiltersCost,
    };
})

export default class RespiratorsContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.threeMPAPRWChargerCost + this.props.pAPRFiltersCost + this.props.northHalf_MaskRespCost + this.props.p100FiltersCost +this.props. p100OrgVapFiltersCost;
        this.props.dispatch(calcTotalRespiratorsCost(newTotal.toFixed(2)));
    }
    
    handleNaN(value, updateMaterialName){
        if(isNaN(value)){
            this.props.dispatch(updateMaterialName(0));
        }else{
            this.props.dispatch(updateMaterialName(value));
        }
    }

    handleUpdateThreeMPAPRWCharger(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateThreeMPAPRWCharger);
    }

    handleUpdatePAPRFilters(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updatePAPRFilters);
    }

    handleUpdateNorthHalf_MaskResp(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateNorthHalf_MaskResp);
    }

    handleUpdateP100Filters(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateP100Filters);
    }

    handleUpdateP100OrgVapFilters(e){
        var value = parseInt(e.target.value);
        this.handleNaN(value, updateP100OrgVapFilters);
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <Respirators
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateThreeMPAPRWCharger={this.handleUpdateThreeMPAPRWCharger.bind(this)}
                    threeMPAPRWChargerQuantity={this.props.threeMPAPRWChargerQuantity}
                    threeMPAPRWChargerCost={this.props.threeMPAPRWChargerCost}
                    
                    onUpdatePAPRFilters={this.handleUpdatePAPRFilters.bind(this)}
                    pAPRFiltersQuantity={this.props.pAPRFiltersQuantity}
                    pAPRFiltersCost={this.props.pAPRFiltersCost}
                    
                    onUpdateNorthHalf_MaskResp={this.handleUpdateNorthHalf_MaskResp.bind(this)}
                    northHalf_MaskRespQuantity={this.props.northHalf_MaskRespQuantity}
                    northHalf_MaskRespCost={this.props.northHalf_MaskRespCost}
                    
                    onUpdateP100Filters={this.handleUpdateP100Filters.bind(this)}
                    p100FiltersQuantity={this.props.p100FiltersQuantity}
                    p100FiltersCost={this.props.p100FiltersCost}
                    
                    onUpdateP100OrgVapFilters={this.handleUpdateP100OrgVapFilters.bind(this)}
                    p100OrgVapFiltersQuantity={this.props.p100OrgVapFiltersQuantity}
                    p100OrgVapFiltersCost={this.props.p100OrgVapFiltersCost} />
            );
        }
};
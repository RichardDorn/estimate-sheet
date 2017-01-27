import React from "react";
var PropTypes = React.PropTypes;
import styles from "../styles";
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function Respirators(props) {
    return (
        <div>   
            <Card>
                <CardHeader 
                    title="Respirators"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>
                    <MaterialItem>
                        <MaterialName
                            materialName="3M PAPR w/ Charger" />
                        <MaterialInput 
                            name="Tooth Brush"
                            handleChange={props.onUpdateThreeMPAPRWCharger}
                            handleFocus={props.onFocusQuantity}
                            value={props.threeMPAPRWChargerQuantity} />
                        <MaterialCost
                            materialCost={props.threeMPAPRWChargerCost} />
                        <div className="col-sm-4">
                            <p style={styles.priceWarning}>NEEDS CORRECT PRICE!!</p>
                        </div>
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="PAPR Filters" />
                        <MaterialInput 
                            name="PAPR Filters"
                            handleChange={props.onUpdatePAPRFilters}
                            handleFocus={props.onFocusQuantity}
                            value={props.pAPRFiltersQuantity} />
                        <MaterialCost
                            materialCost={props.pAPRFiltersCost} />
                        <div className="col-sm-4">
                            <p style={styles.priceWarning}>NEEDS CORRECT PRICE!!</p>
                        </div>
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="North Half-Mask Respirator - S, M, L" />
                        <MaterialInput 
                            name="North Half-Mask Respirator"
                            handleChange={props.onUpdateNorthHalf_MaskResp}
                            handleFocus={props.onFocusQuantity}
                            value={props.northHalf_MaskRespQuantity} />
                        <MaterialCost
                            materialCost={props.northHalf_MaskRespCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="P-100 Filters - 2/Package" />
                        <MaterialInput 
                            name="P-100 Filters"
                            handleChange={props.onUpdateP100Filters}
                            handleFocus={props.onFocusQuantity}
                            value={props.p100FiltersQuantity} />
                        <MaterialCost
                            materialCost={props.p100FiltersCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="P-100 Organic Vapor Stack Filters - 2/Package" />
                        <MaterialInput 
                            name="P-100 Organic Vapor Stack Filters"
                            handleChange={props.onUpdateP100OrgVapFilters}
                            handleFocus={props.onFocusQuantity}
                            value={props.p100OrgVapFiltersQuantity} />
                        <MaterialCost
                            materialCost={props.p100OrgVapFiltersCost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
        );
};

Respirators.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateThreeMPAPRWCharger: PropTypes.func.isRequired,
    threeMPAPRWChargerQuantity: PropTypes.number.isRequired,
    threeMPAPRWChargerCost: PropTypes.number.isRequired,
    
    onUpdatePAPRFilters: PropTypes.func.isRequired,
    pAPRFiltersQuantity: PropTypes.number.isRequired,
    pAPRFiltersCost: PropTypes.number.isRequired,

    onUpdateNorthHalf_MaskResp: PropTypes.func.isRequired,
    northHalf_MaskRespQuantity: PropTypes.number.isRequired,
    northHalf_MaskRespCost: PropTypes.number.isRequired,

    onUpdateP100Filters: PropTypes.func.isRequired,
    p100FiltersQuantity: PropTypes.number.isRequired,
    p100FiltersCost: PropTypes.number.isRequired,

    onUpdateP100OrgVapFilters: PropTypes.func.isRequired,
    p100OrgVapFiltersQuantity: PropTypes.number.isRequired,
    p100OrgVapFiltersCost: PropTypes.number.isRequired,
};

module.exports = Respirators;
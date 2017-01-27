import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function Filters(props) {
    return (
        <div>   
            <Card>
                <CardHeader 
                    title="Filters"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>
                    <MaterialItem>
                        <MaterialName
                            materialName="50 Micron Water Filter" />
                        <MaterialInput 
                            name="50 Micron Water Filter"
                            handleChange={props.onUpdateFiftyMicWater}
                            handleFocus={props.onFocusQuantity}
                            value={props.fiftyMicWaterQuantity} />
                        <MaterialCost
                            materialCost={props.fiftyMicWaterCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="20 Micron Water Filter" />
                        <MaterialInput 
                            name="20 Micron Water Filter"
                            handleChange={props.onUpdateTwentyMicWater}
                            handleFocus={props.onFocusQuantity}
                            value={props.twentyMicWaterQuantity} />
                        <MaterialCost
                            materialCost={props.twentyMicWaterCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="5 Micron Water Filter" />
                        <MaterialInput 
                            name="5 Micron Water Filter"
                            handleChange={props.onUpdateFiveMicWater}
                            handleFocus={props.onFocusQuantity}
                            value={props.fiveMicWaterQuantity} />
                        <MaterialCost
                            materialCost={props.fiveMicWaterCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="Neg-Air Primary Filters - 50/Case" />
                        <MaterialInput 
                            name="Neg-Air Primary Filters"
                            handleChange={props.onUpdateNegAirPrime}
                            handleFocus={props.onFocusQuantity}
                            value={props.negAirPrimeQuantity} />
                        <MaterialCost
                            materialCost={props.negAirPrimeCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="Neg-Air Secondary Filters - 12/Case" />
                        <MaterialInput 
                            name="Neg-Air Secondary Filters"
                            handleChange={props.onUpdateNegAirSecond}
                            handleFocus={props.onFocusQuantity}
                            value={props.negAirSecondQuantity} />
                        <MaterialCost
                            materialCost={props.negAirSecondCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="Neg-Air HEPA Filter" />
                        <MaterialInput 
                            name="Neg-Air HEPA Filter"
                            handleChange={props.onUpdateNegAirHEPA}
                            handleFocus={props.onFocusQuantity}
                            value={props.negAirHEPAQuantity} />
                        <MaterialCost
                            materialCost={props.negAirHEPACost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
        );
};

Filters.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateFiftyMicWater: PropTypes.func.isRequired,
    fiftyMicWaterQuantity: PropTypes.number.isRequired,
    fiftyMicWaterCost: PropTypes.number.isRequired,
    
    onUpdateTwentyMicWater: PropTypes.func.isRequired,
    twentyMicWaterQuantity: PropTypes.number.isRequired,
    twentyMicWaterCost: PropTypes.number.isRequired,

    onUpdateFiveMicWater: PropTypes.func.isRequired,
    fiveMicWaterQuantity: PropTypes.number.isRequired,
    fiveMicWaterCost: PropTypes.number.isRequired,

    onUpdateNegAirPrime: PropTypes.func.isRequired,
    negAirPrimeQuantity: PropTypes.number.isRequired,
    negAirPrimeCost: PropTypes.number.isRequired,

    onUpdateNegAirSecond: PropTypes.func.isRequired,
    negAirSecondQuantity: PropTypes.number.isRequired,
    negAirSecondCost: PropTypes.number.isRequired,

    onUpdateNegAirHEPA: PropTypes.func.isRequired,
    negAirHEPAQuantity: PropTypes.number.isRequired,
    negAirHEPACost: PropTypes.number.isRequired,
};

module.exports = Filters;
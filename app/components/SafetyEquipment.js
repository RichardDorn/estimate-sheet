import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function SafetyEquipment(props) {
    return (
        <div>
            <Card>
                <CardHeader 
                    title="SafetyEquipment"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>      
                    <MaterialItem>
                        <MaterialName
                            materialName="Safety Glasses" />
                        <MaterialInput 
                            name="Safety Glasses"
                            handleChange={props.onUpdateSafetyGlasses}
                            handleFocus={props.onFocusQuantity}
                            value={props.safetyGlassesQuantity} />
                        <MaterialCost
                            materialCost={props.safetyGlassesCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="8 oz. Cotton Gloves - 12/Case" />
                        <MaterialInput 
                            name="8 oz. Cotton Gloves"
                            handleChange={props.onUpdateEightOzCottonGloves}
                            handleFocus={props.onFocusQuantity}
                            value={props.eightOzCottonGlovesQuantity} />
                        <MaterialCost
                            materialCost={props.eightOzCottonGlovesCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="25 Man First Aid Kit" />
                        <MaterialInput 
                            name="25 Man First Aid Kit"
                            handleChange={props.onUpdateTwentyFiveManFirstAid}
                            handleFocus={props.onFocusQuantity}
                            value={props.twentyFiveManFirstAidQuantity} />
                        <MaterialCost
                            materialCost={props.twentyFiveManFirstAidCost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
        );
};

SafetyEquipment.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateSafetyGlasses: PropTypes.func.isRequired,
    safetyGlassesQuantity: PropTypes.number.isRequired,
    safetyGlassesCost: PropTypes.number.isRequired,

    onUpdateEightOzCottonGloves: PropTypes.func.isRequired,
    eightOzCottonGlovesQuantity: PropTypes.number.isRequired,
    eightOzCottonGlovesCost: PropTypes.number.isRequired,

    onUpdateTwentyFiveManFirstAid: PropTypes.func.isRequired,
    twentyFiveManFirstAidQuantity: PropTypes.number.isRequired,
    twentyFiveManFirstAidCost: PropTypes.number.isRequired,
};

module.exports = SafetyEquipment;
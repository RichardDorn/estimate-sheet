import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function BagsBarrels(props) {
    return (
        <div>
              <Card>
                <CardHeader 
                    title="Bags & Barrels"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>      
                    <MaterialItem>
                        <MaterialName
                            materialName="38x60 Clear General Debris Bags - 50/Roll" />
                        <MaterialInput 
                            name="38x60 Clear General Debris Bags"
                            handleChange={props.onUpdateThirtyEight_SixtyClearGenDeb}
                            handleFocus={props.onFocusQuantity}
                            value={props.thirtyEight_SixtyClearGenDebQuantity} />
                        <MaterialCost
                            materialCost={props.thirtyEight_SixtyClearGenDebCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="Fiber Barrels" />
                        <MaterialInput 
                            name="Fiber Barrels"
                            handleChange={props.onUpdateFiberBarrels}
                            handleFocus={props.onFocusQuantity}
                            value={props.fiberBarrelsQuantity} />
                        <MaterialCost
                            materialCost={props.fiberBarrelsCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="30x40 Clear Asbestos Bags- 100/Roll" />
                        <MaterialInput 
                            name="30x40 Clear Asbestos Bags"
                            handleChange={props.onUpdateThirty_FortyClearAB}
                            handleFocus={props.onFocusQuantity}
                            value={props.thirty_FortyClearABQuantity} />
                        <MaterialCost
                            materialCost={props.thirty_FortyClearABCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="30x40 Black Asbestos Bags - 100/Roll" />
                        <MaterialInput 
                            name="30x40 Black Asbestos Bags"
                            handleChange={props.onUpdateThirty_FortyBlackAB}
                            handleFocus={props.onFocusQuantity}
                            value={props.thirty_FortyBlackABQuantity} />
                        <MaterialCost
                            materialCost={props.thirty_FortyBlackABCost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
        );
};

BagsBarrels.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateThirtyEight_SixtyClearGenDeb: PropTypes.func.isRequired,
    thirtyEight_SixtyClearGenDebQuantity: PropTypes.number.isRequired,
    thirtyEight_SixtyClearGenDebCost: PropTypes.number.isRequired,
    
    onUpdateFiberBarrels: PropTypes.func.isRequired,
    fiberBarrelsQuantity: PropTypes.number.isRequired,
    fiberBarrelsCost: PropTypes.number.isRequired,

    onUpdateThirty_FortyClearAB: PropTypes.func.isRequired,
    thirty_FortyClearABQuantity: PropTypes.number.isRequired,
    thirty_FortyClearABCost: PropTypes.number.isRequired,

    onUpdateThirty_FortyBlackAB: PropTypes.func.isRequired,
    thirty_FortyBlackABQuantity: PropTypes.number.isRequired,
    thirty_FortyBlackABCost: PropTypes.number.isRequired,
};

module.exports = BagsBarrels;
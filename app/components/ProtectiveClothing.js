import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function ProtectiveClothing(props) {
    return (
        <div>
            <Card>
                <CardHeader 
                    title="Protective Clothing"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>      
                    <MaterialItem>
                        <MaterialName
                            materialName="XXXL Tyvek Suits - 25/Case" />
                        <MaterialInput 
                            name="XXXL Tyvek Suits"
                            handleChange={props.onUpdateXXXLTyvekSuits}
                            handleFocus={props.onFocusQuantity}
                            value={props.xXXLTyvekSuitsQuantity} />
                        <MaterialCost
                            materialCost={props.xXXLTyvekSuitsCost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
    );
};

ProtectiveClothing.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateXXXLTyvekSuits: PropTypes.func.isRequired,
    xXXLTyvekSuitsQuantity: PropTypes.number.isRequired,
    xXXLTyvekSuitsCost: PropTypes.number.isRequired,
};

module.exports = ProtectiveClothing;
import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function GloveBags(props) {
    return (
        <div>
            <Card>
                <CardHeader 
                    title="Glove-Bags"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>      
                    <MaterialItem>
                        <MaterialName
                            materialName="44x60 Extended Run Glove-Bags - 25/Roll" />
                        <MaterialInput 
                            name="44x60 Extended Run Glove-Bags"
                            handleChange={props.onUpdateFourtyFour_SixtyExtRunGB}
                            handleFocus={props.onFocusQuantity}
                            value={props.fourtyFour_SixtyExtRunGBQuantity} />
                        <MaterialCost
                            materialCost={props.fourtyFour_SixtyExtRunGBCost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
    );
};

GloveBags.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateFourtyFour_SixtyExtRunGB: PropTypes.func.isRequired,
    fourtyFour_SixtyExtRunGBQuantity: PropTypes.number.isRequired,
    fourtyFour_SixtyExtRunGBCost: PropTypes.number.isRequired,
};

module.exports = GloveBags;
import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function PolyTubing(props) {
    return (
        <div>
            <Card>
                <CardHeader 
                    title="PolyTubing"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>      
                    <MaterialItem>
                        <MaterialName
                            materialName="4 mil LayFlat Tubing - 12in x 500ft" />
                        <MaterialInput 
                            name="4 mil LayFlat Tubing - 12in x 500ft"
                            handleChange={props.onUpdateFourMilLayFlatTubing}
                            handleFocus={props.onFocusQuantity}
                            value={props.fourMilLayFlatTubingQuantity} />
                        <MaterialCost
                            materialCost={props.fourMilLayFlatTubingCost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
        );
};

PolyTubing.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateFourMilLayFlatTubing: PropTypes.func.isRequired,
    fourMilLayFlatTubingQuantity: PropTypes.number.isRequired,
    fourMilLayFlatTubingCost: PropTypes.number.isRequired,
};

module.exports = PolyTubing;
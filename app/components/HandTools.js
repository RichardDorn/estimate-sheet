import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function HandTools(props) {
    return (
        <div>   
            <Card>
                <CardHeader 
                    title="HandTools"
                    actAsExpander={true}
                    showExpandableButton={true} />
                <CardText expandable={true}>
                    <MaterialItem>
                        <MaterialName
                            materialName="Tooth Brush" />
                        <MaterialInput 
                            name="Tooth Brush"
                            handleChange={props.onUpdateToothBrush}
                            handleFocus={props.onFocusQuantity}
                            value={props.toothBrushQuantity} />
                        <MaterialCost
                            materialCost={props.toothBrushCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="3x19 Long Handle Brush" />
                        <MaterialInput 
                            name="3x19 Long Handle Brush"
                            handleChange={props.onUpdateThree_NinteenLongBrush}
                            handleFocus={props.onFocusQuantity}
                            value={props.three_NinteenLongBrushQuantity} />
                        <MaterialCost
                            materialCost={props.three_NinteenLongBrushCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName='4" Wall Scraper' />
                        <MaterialInput 
                            name='4" Wall Scraper'
                            handleChange={props.onUpdateFourInchWallScrape}
                            handleFocus={props.onFocusQuantity}
                            value={props.fourInchWallScrapeQuantity} />
                        <MaterialCost
                            materialCost={props.fourInchWallScrapeCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="Blades - 10/Box" />
                        <MaterialInput 
                            name="Blades"
                            handleChange={props.onUpdateBlades}
                            handleFocus={props.onFocusQuantity}
                            value={props.bladesQuantity} />
                        <MaterialCost
                            materialCost={props.bladesCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="Spud Bar Blades - 6/Case" />
                        <MaterialInput 
                            name="Spud Bar Blades"
                            handleChange={props.onUpdateSpudBlades}
                            handleFocus={props.onFocusQuantity}
                            value={props.spudBladesQuantity} />
                        <MaterialCost
                            materialCost={props.spudBladesCost} />
                    </MaterialItem>

                    <MaterialItem>
                        <MaterialName
                            materialName="Plastic B-Scoop Shovel" />
                        <MaterialInput 
                            name="Plastic B-Scoop Shovel"
                            handleChange={props.onUpdatePlasticB_ScoopShovel}
                            handleFocus={props.onFocusQuantity}
                            value={props.plasticB_ScoopShovelQuantity} />
                        <MaterialCost
                            materialCost={props.plasticB_ScoopShovelCost} />
                    </MaterialItem>
                </CardText>
            </Card>
        </div>
        );
};

HandTools.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateToothBrush: PropTypes.func.isRequired,
    toothBrushQuantity: PropTypes.number.isRequired,
    toothBrushCost: PropTypes.number.isRequired,
    
    onUpdateThree_NinteenLongBrush: PropTypes.func.isRequired,
    three_NinteenLongBrushQuantity: PropTypes.number.isRequired,
    three_NinteenLongBrushCost: PropTypes.number.isRequired,

    onUpdateFourInchWallScrape: PropTypes.func.isRequired,
    fourInchWallScrapeQuantity: PropTypes.number.isRequired,
    fourInchWallScrapeCost: PropTypes.number.isRequired,

    onUpdateBlades: PropTypes.func.isRequired,
    bladesQuantity: PropTypes.number.isRequired,
    bladesCost: PropTypes.number.isRequired,

    onUpdateSpudBlades: PropTypes.func.isRequired,
    spudBladesQuantity: PropTypes.number.isRequired,
    spudBladesCost: PropTypes.number.isRequired,

    onUpdatePlasticB_ScoopShovel: PropTypes.func.isRequired,
    plasticB_ScoopShovelQuantity: PropTypes.number.isRequired,
    plasticB_ScoopShovelCost: PropTypes.number.isRequired,
};

module.exports = HandTools;
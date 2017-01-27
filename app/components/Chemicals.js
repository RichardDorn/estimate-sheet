import React from "react";
var PropTypes = React.PropTypes;
import MaterialItem from "./MaterialItem";
import MaterialName from "./MaterialName";
import MaterialInput from "./MaterialInput";
import MaterialCost from "./MaterialCost";
import {Card, CardHeader, CardText} from 'material-ui/Card';

function Chemicals(props) {
        return (
            <div>   
                <Card>
                    <CardHeader 
                        title="Chemicals"
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardText expandable={true}>
                        <MaterialItem>
                            <MaterialName
                                materialName="Mastic Remover - 5 Gal." />
                            <MaterialInput 
                                name="5 Gal. Mastic Remover"
                                handleChange={props.onUpdateFiveGalMasticRemover}
                                handleFocus={props.onFocusQuantity}
                                value={props.fiveGalMasticRemoverQuantity} />
                            <MaterialCost
                                materialCost={props.fiveGalMasticRemoverCost} />
                        </MaterialItem>

                        <MaterialItem>
                            <MaterialName
                                materialName="Mastic Remover - 55 Gal." />
                            <MaterialInput 
                                name="55 Gal. Mastic Remover"
                                handleChange={props.onUpdateFiftyFiveGalMasticRemover}
                                handleFocus={props.onFocusQuantity}
                                value={props.fiftyFiveGalMasticRemoverQuantity} />
                            <MaterialCost
                            materialCost={props.fiftyFiveGalMasticRemoverCost} />
                        </MaterialItem>

                        <MaterialItem>
                            <MaterialName
                                materialName="Spray Glue - 12/Case" />
                            <MaterialInput 
                                name="Spray Glue"
                                handleChange={props.onUpdateSprayGlue}
                                handleFocus={props.onFocusQuantity}
                                value={props.sprayGlueQuantity} />
                            <MaterialCost
                                materialCost={props.sprayGlueCost} />
                        </MaterialItem>

                        <MaterialItem>
                            <MaterialName
                                materialName="Fiberset PM Clear - 5 Gal." />
                            <MaterialInput 
                                name="5 Gal. Fiberset PM Clear"
                                handleChange={props.onUpdateFiveGalFibersetPMClear}
                                handleFocus={props.onFocusQuantity}
                                value={props.fiveGalFibersetPMClearQuantity} />
                            <MaterialCost
                                materialCost={props.fiveGalFibersetPMClearCost} />
                        </MaterialItem>

                        <MaterialItem>
                            <MaterialName
                                materialName="Fiberset PM White - 5 Gal." />
                            <MaterialInput 
                                name="5 Gal. Fiberset PM White"
                                handleChange={props.onUpdateFiveGalFibersetPMWhite}
                                handleFocus={props.onFocusQuantity}
                                value={props.fiveGalFibersetPMWhiteQuantity} />
                            <MaterialCost
                                materialCost={props.fiveGalFibersetPMWhiteCost} />
                        </MaterialItem>

                        <MaterialItem>
                            <MaterialName
                                materialName="Fiberlock Piranha Paint Stripper - 5 Gal." />
                            <MaterialInput 
                                name="5 gal. Fiberlock Piranha Paint Stripper"
                                handleChange={props.onUpdateFiveGalFiberlockPiranhaPaintStripper}
                                handleFocus={props.onFocusQuantity}
                                value={props.fiveGalFiberlockPiranhaPaintStripperQuantity} />
                            <MaterialCost
                                materialCost={props.fiveGalFiberlockPiranhaPaintStripperCost} />
                        </MaterialItem>
                    </CardText>
                </Card>
            </div>
            );
};

Chemicals.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateFiveGalMasticRemover: PropTypes.func.isRequired,
    fiveGalMasticRemoverQuantity: PropTypes.number.isRequired,
    fiveGalMasticRemoverCost: PropTypes.number.isRequired,
    
    onUpdateFiftyFiveGalMasticRemover: PropTypes.func.isRequired,
    fiftyFiveGalMasticRemoverQuantity: PropTypes.number.isRequired,
    fiftyFiveGalMasticRemoverCost: PropTypes.number.isRequired,

    onUpdateSprayGlue: PropTypes.func.isRequired,
    sprayGlueQuantity: PropTypes.number.isRequired,
    sprayGlueCost: PropTypes.number.isRequired,

    onUpdateFiveGalFibersetPMClear: PropTypes.func.isRequired,
    fiveGalFibersetPMClearQuantity: PropTypes.number.isRequired,
    fiveGalFibersetPMClearCost: PropTypes.number.isRequired,

    onUpdateFiveGalFibersetPMWhite: PropTypes.func.isRequired,
    fiveGalFibersetPMWhiteQuantity: PropTypes.number.isRequired,
    fiveGalFibersetPMWhiteCost: PropTypes.number.isRequired,

    onUpdateFiveGalFiberlockPiranhaPaintStripper: PropTypes.func.isRequired,
    fiveGalFiberlockPiranhaPaintStripperQuantity: PropTypes.number.isRequired,
    fiveGalFiberlockPiranhaPaintStripperCost: PropTypes.number.isRequired,
};

module.exports = Chemicals;
var React = require('react');
var PropTypes = React.PropTypes;
var MaterialSet = require('./MaterialSet');
var MaterialItem = require('./MaterialItem');
var MaterialName = require('./MaterialName');
var MaterialInput = require('./MaterialInput');
var MaterialCost = require('./MaterialCost');

function PolySheeting(props) {
    return (
        <div>
            <MaterialSet 
                heading="PolySheeting" >
                
                <MaterialItem>
                    <MaterialName
                        materialName="4x10 Clear" />
                    <MaterialInput 
                        name="4x10 Clear"
                        handleChange={props.onUpdateFour_TenClear}
                        handleFocus={props.onFocusQuantity}
                        value={props.four_TenClearQuantity} />
                    <MaterialCost
                        materialCost={props.four_TenClearCost} />
                </MaterialItem>

                <MaterialItem>
                    <MaterialName
                        materialName="4x20 Equivalent" />
                    <MaterialInput 
                        name="4x20 Equivalent"
                        handleChange={props.onUpdateFour_TwentyEq}
                        handleFocus={props.onFocusQuantity}
                        value={props.four_TwentyEqQuantity} />
                    <MaterialCost
                        materialCost={props.four_TwentyEqCost} />
                </MaterialItem>

                <MaterialItem>
                    <MaterialName
                        materialName="4x20" />
                    <MaterialInput 
                        name="4x20"
                        handleChange={props.onUpdateFour_Twenty}
                        handleFocus={props.onFocusQuantity}
                        value={props.four_TwentyQuantity} />
                    <MaterialCost
                        materialCost={props.four_TwentyCost} />
                </MaterialItem>

                <MaterialItem>
                    <MaterialName
                        materialName="4x20 Black" />
                    <MaterialInput 
                        name="4x20 Black"
                        handleChange={props.onUpdateFour_TwentyBlack}
                        handleFocus={props.onFocusQuantity}
                        value={props.four_TwentyBlackQuantity} />
                    <MaterialCost
                        materialCost={props.four_TwentyBlackCost} />
                </MaterialItem>

                <MaterialItem>
                    <MaterialName
                        materialName="6x20 Equivalent" />
                    <MaterialInput 
                        name="6x20 Equivalent"
                        handleChange={props.onUpdateSix_TwentyEq}
                        handleFocus={props.onFocusQuantity}
                        value={props.six_TwentyEqQuantity} />
                    <MaterialCost
                        materialCost={props.six_TwentyEqCost} />
                </MaterialItem>

                <MaterialItem>
                    <MaterialName
                        materialName="6x20 Clear" />
                    <MaterialInput 
                        name="6x20 Clear"
                        handleChange={props.onUpdateSix_TwentyClear}
                        handleFocus={props.onFocusQuantity}
                        value={props.six_TwentyClearQuantity} />
                    <MaterialCost
                        materialCost={props.six_TwentyClearCost} />
                </MaterialItem>

                <MaterialItem>
                    <MaterialName
                        materialName="6x20 Black" />
                    <MaterialInput 
                        name="6x20 Black"
                        handleChange={props.onUpdateSix_TwentyBlack}
                        handleFocus={props.onFocusQuantity}
                        value={props.six_TwentyBlackQuantity} />
                    <MaterialCost
                        materialCost={props.six_TwentyBlackCost} />
                </MaterialItem>
                 
            </MaterialSet>
        </div>
        );
};

PolySheeting.propTypes = {
    onFocusQuantity: PropTypes.func.isRequired,

    onUpdateFour_TenClear: PropTypes.func.isRequired,
    four_TenClearQuantity: PropTypes.number.isRequired,
    four_TenClearCost: PropTypes.number.isRequired,
    
    onUpdateFour_TwentyEq: PropTypes.func.isRequired,
    four_TwentyEqQuantity: PropTypes.number.isRequired,
    four_TwentyEqCost: PropTypes.number.isRequired,

    onUpdateFour_Twenty: PropTypes.func.isRequired,
    four_TwentyQuantity: PropTypes.number.isRequired,
    four_TwentyCost: PropTypes.number.isRequired,

    onUpdateFour_TwentyBlack: PropTypes.func.isRequired,
    four_TwentyBlackQuantity: PropTypes.number.isRequired,
    four_TwentyBlackCost: PropTypes.number.isRequired,

    onUpdateSix_TwentyEq: PropTypes.func.isRequired,
    six_TwentyEqQuantity: PropTypes.number.isRequired,
    six_TwentyEqCost: PropTypes.number.isRequired,

    onUpdateSix_TwentyClear: PropTypes.func.isRequired,
    six_TwentyClearQuantity: PropTypes.number.isRequired,
    six_TwentyClearCost: PropTypes.number.isRequired,

    onUpdateSix_TwentyBlack: PropTypes.func.isRequired,
    six_TwentyBlackQuantity: PropTypes.number.isRequired,
    six_TwentyBlackCost: PropTypes.number.isRequired,
};

module.exports = PolySheeting;
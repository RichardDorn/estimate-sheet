var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
import TextField from 'material-ui/TextField';

function PolySheeting(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <h3>Poly Sheeting</h3>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>4X10 Clear</p>
                </div>

                <div className="col-sm-2">
                    <TextField
                        name="Four x Ten Clear"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        className="form-control"
                        hintText="0"
                        onChange={props.onUpdateFour_TenClear}
                        onFocus={props.onFocusQuantity}
                        value={props.four_TenClearQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.four_TenClearCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>4X20 Equivalent</p>
                </div>  
                
                <div className="col-sm-2">
                    <TextField
                        name="Four x Twenty Equivalent"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        className="form-control"
                        placeholder="0"
                        onChange={props.onUpdateFour_TwentyEq}
                        onFocus={props.onFocusQuantity}
                        value={props.four_TwentyEqQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.four_TwentyEqCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>4X20</p>
                </div>  
                
                <div className="col-sm-2">
                    <TextField
                        name="Four x Twenty"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        className="form-control"
                        hintText="0"
                        onChange={props.onUpdateFour_Twenty}
                        onFocus={props.onFocusQuantity}
                        value={props.four_TwentyQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.four_TwentyCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>4X20 Black</p>
                </div>  
                
                <div className="col-sm-2">
                    <TextField
                        name="Four x Twenty Black"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        className="form-control"
                        hintText="0"
                        onChange={props.onUpdateFour_TwentyBlack}
                        onFocus={props.onFocusQuantity}
                        value={props.four_TwentyBlackQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.four_TwentyBlackCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>6X20 Equivalent</p>
                </div>  
                
                <div className="col-sm-2">
                    <TextField
                        name="Six x Twenty Equivalent"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        className="form-control"
                        hintText="0"
                        onChange={props.onUpdateSix_TwentyEq}
                        onFocus={props.onFocusQuantity}
                        value={props.six_TwentyEqQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.six_TwentyEqCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>6X20 Clear</p>
                </div>  
                
                <div className="col-sm-2">
                    <TextField
                        name="Six x Twenty Clear"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        className="form-control"
                        hintText="0"
                        onChange={props.onUpdateSix_TwentyClear}
                        onFocus={props.onFocusQuantity}
                        value={props.six_TwentyClearQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.six_TwentyClearCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>6X20 Black</p>
                </div>  
                
                <div className="col-sm-2">
                    <TextField
                        name="Six x Twenty Black"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        className="form-control"
                        hintText="0"
                        onChange={props.onUpdateSix_TwentyBlack}
                        onFocus={props.onFocusQuantity}
                        value={props.six_TwentyBlackQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.six_TwentyBlackCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    //Product Name
                </div>  
                
                <div className="col-sm-2">
                    //Input element
                </div>

                <div className="col-sm-2">
                    //Calculated Cost
                </div>
            </div>


        </div>
        );
};

PolySheeting.propTypes = {
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
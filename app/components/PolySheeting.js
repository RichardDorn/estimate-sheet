var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

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
                    <input
                        className="form-control"
                        placeholder="0"
                        onChange={props.onUpdateFour_TenClear}
                        onFocus={props.onFocusQuantity}
                        value={props.four_TenClearQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.four_TenClearCost}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>4X20 Equivalent</p>
                </div>  
                
                <div className="col-sm-2">
                    <input
                        className="form-control"
                        placeholder="0"
                        onChange={props.onUpdateFour_TwentyEq}
                        onFocus={props.onFocusQuantity}
                        value={props.four_TwentyEqQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.four_TwentyEqCost}</p>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-offset-1 col-sm-2">
                    <p>4X20</p>
                </div>  
                
                <div className="col-sm-2">
                    <input
                        className="form-control"
                        placeholder="0"
                        onChange={props.onUpdateFour_Twenty}
                        onFocus={props.onFocusQuantity}
                        value={props.four_TwentyQuantity}
                        type="number"
                        min="0" />
                </div>

                <div className="col-sm-2">
                    <p>${props.four_TwentyCost}</p>
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
};

module.exports = PolySheeting;
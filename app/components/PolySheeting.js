var React = require('react');
var PropTypes = React.PropTypes;

function PolySheeting(props) {
    return (
        <div>
            <h3>Poly Sheeting</h3>
            <p>4X10 Clear</p>
            <input
                className="form-control"
                placeholder="0"
                onChange={props.onUpdateFour_TenClear}
                onFocus={props.onFocusQuantity}
                value={props.four_TenClearQuantity}
                type="number"
                min="0" />
            <p>${props.four_TenClearCost}</p>
            
            <p>4X20 Equivalent</p>
            <input
            className="form-control"
            placeholder="0"
            onChange={props.onUpdateFour_TwentyEq}
            onFocus={props.onFocusQuantity}
            value={props.four_TwentyEqQuantity}
            type="number"
            min="0" />
        <p>${props.four_TwentyEqCost}</p>
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
};

module.exports = PolySheeting;
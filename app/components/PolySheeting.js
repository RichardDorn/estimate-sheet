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
                value={props.four_TenClearQuantity}
                type="number"
                min="0" />
            <p>${props.four_TenClearCost}</p>
        </div>
        );
};

PolySheeting.propTypes = {
    onUpdateFour_TenClear: PropTypes.func.isRequired,
    four_TenClearQuantity: PropTypes.number.isRequired,
    four_TenClearCost: PropTypes.number.isRequired,
};

module.exports = PolySheeting;
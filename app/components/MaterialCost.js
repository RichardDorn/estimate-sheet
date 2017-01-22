var React = require('react');
var PropTypes = React.PropTypes;

function MaterialCost(props) {
    return (
        <div className="col-sm-2">
            <p>${props.materialCost.toFixed(2)}</p>
        </div>
        );
};

MaterialCost.propTypes = {
    materialCost: PropTypes.number.isRequired,
};

module.exports = MaterialCost;
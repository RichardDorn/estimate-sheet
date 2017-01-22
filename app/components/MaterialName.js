var React = require('react');
var PropTypes = React.PropTypes;

function MaterialName(props) {
    return (
        <div className="col-sm-offset-1 col-sm-2">
            <p>{props.materialName}</p>
        </div>
        );
};

MaterialName.propTypes = {
    materialName: PropTypes.string.isRequired,
};

module.exports = MaterialName;
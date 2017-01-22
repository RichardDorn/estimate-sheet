var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function MaterialSet(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <h3>{props.heading}</h3>   
                </div>
            </div>
            {props.children}
        </div>
        );
};

MaterialSet.propTypes = {
    heading: PropTypes.string.isRequired,
};

module.exports = MaterialSet;
var React = require('react');
var ClientContactInfoContainer = require('../containers/ClientContactInfoContainer');
var PropTypes = React.PropTypes;

function ProjectInfo(props) {
    return (
        <div className="form-group">
            <h2><u>Project Info</u></h2>
            <p>Estimate #:</p>
            <input
                className="form-control"
                placeholder="Enter Estimate Number"
                onChange={props.onUpdateEstimateNumber}
                value={props.estimateNumber}
                type="text" />
            <p>Project Address:</p>
            <input
                className="form-control"
                placeholder="Enter Project Address"
                onChange={props.onUpdateProjectAddress}
                value={props.projectAddress}
                type="text" />
            <ClientContactInfoContainer />
        </div>
        );
};

ProjectInfo.propTypes = {
    onUpdateEstimateNumber: PropTypes.func.isRequired,
    onUpdateProjectAddress: PropTypes.func.isRequired,
    estimateNumber: PropTypes.string.isRequired,
    projectAddress: PropTypes.string.isRequired
}

module.exports = ProjectInfo;
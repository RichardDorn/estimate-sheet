var React = require('react');
var ClientContactInfoContainer = require('../containers/projectinfo/ClientContactInfoContainer');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function ProjectInfo(props) {
    return (
        <div style={styles.componentContainer}>
            <div className="row">
                <div className="col-sm-4">
                    <h2><u>Project Info</u></h2>
                </div>
            </div>

            <div className="row">
                <div className="form group">
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            placeholder="Estimate #:"
                            onChange={props.onUpdateEstimateNumber}
                            value={props.estimateNumber}
                            type="text" />
                    </div>

                    <div className="col-sm-8">
                        <input
                            className="form-control"
                            placeholder="Project Address:"
                            onChange={props.onUpdateProjectAddress}
                            value={props.projectAddress}
                            type="text" />
                    </div>
                </div>
            </div>
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
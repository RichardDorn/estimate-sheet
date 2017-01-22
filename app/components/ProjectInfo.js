var React = require('react');
var ClientContactInfoContainer = require('../containers/projectinfo/ClientContactInfoContainer');
var PropTypes = React.PropTypes;
var styles = require('../styles');
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

function ProjectInfo(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <h2><u>Project Info</u></h2>
                </div>
            </div>

            <div className="row">
                <div className="form group">
                    <div className="col-sm-4">
                        <TextField
                            name="Estimate #"
                            fullWidth={true}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineFocusStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            floatingLabelText="Estimate #:"
                            className="form-control"
                            hintText="9999-001"
                            onChange={props.onUpdateEstimateNumber}
                            value={props.estimateNumber}
                            type="text" />
                    </div>

                    <div className="col-sm-8">
                        <TextField
                            name="Project Address"
                            fullWidth={true}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineFocusStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            floatingLabelText="Project Address:"
                            className="form-control"
                            hintText="1234 Main St. Anytown, TX 77777"
                            onChange={props.onUpdateProjectAddress}
                            value={props.projectAddress}
                            type="text" />
                    </div>
                </div>
            </div>
            <ClientContactInfoContainer />
            <Divider  style={styles.dividerStyle} />
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
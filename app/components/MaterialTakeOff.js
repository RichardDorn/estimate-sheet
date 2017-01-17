var React = require('react');
var styles = require('../styles');

function MaterialTakeOff(props) {
    return (
        <div style={styles.componentContainer}>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-4">
                        <h2><u>Material Take Off</u></h2>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
        );
};

module.exports = MaterialTakeOff;
import React from "react";
import styles from "../styles";
import Divider from 'material-ui/Divider';

function MaterialTakeOff(props) {
    return (
        <div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-4">
                        <h2><u>Material Take Off</u></h2>
                    </div>
                </div>
                {props.children}
            </div>
            <Divider style={styles.dividerStyle} />
        </div>
        );
};

module.exports = MaterialTakeOff;
import React from "react";
var PropTypes = React.PropTypes;
import styles from "../styles";
import TextField from 'material-ui/TextField';

function MaterialInput(props) {
    return (
        <div className="col-sm-2">
            <TextField
                name={props.name}
                fullWidth={true}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
                className="form-control"
                hintText="0"
                onChange={props.handleChange}
                onFocus={props.handleFocus}
                value={props.value}
                type="number"
                min="0" />
        </div>
        );
};

MaterialInput.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,

};

module.exports = MaterialInput;
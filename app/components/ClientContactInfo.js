import React from "react";
var PropTypes = React.PropTypes;
import styles from "../styles";
import TextField from 'material-ui/TextField';

function ClientContactInfo(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <h3>Client Contact Info</h3>
                </div>
            </div>

            <div className="row" >
                <div className="col-sm-4">
                    <TextField
                        name="Client Company"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        floatingLabelText="Company:"
                        className="form-control"
                        hintText="American Airlines"
                        onChange={props.onUpdateClientCompany}
                        value={props.clientCompany}
                        type="text" />
                </div>

                <div className="col-sm-8">
                    <TextField
                        name="Client Address"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        floatingLabelText="Address:"
                        className="form-control"
                        hintText="1234 Main St. Anytown, TX 77777"
                        onChange={props.onUpdateClientAddress}
                        value={props.clientAddress}
                        type="text" />
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-4">
                    <TextField
                        name="Client Name"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        floatingLabelText="Name:"
                        className="form-control"
                        hintText="John Smith"
                        onChange={props.onUpdateClientName}
                        value={props.clientName}
                        type="text" />
                </div>
                
                <div className="col-sm-4">
                    <TextField
                        name="Client Phone"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        floatingLabelText="Phone:"
                        className="form-control"
                        hintText="(555) 555-5555"
                        onChange={props.onUpdateClientPhone}
                        value={props.clientPhone}
                        type="tel" />
                </div>
                
                <div className="col-sm-4">
                    <TextField
                        name="Client E-Mail"
                        fullWidth={true}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        floatingLabelText="E-Mail:"
                        className="form-control"
                        hintText="Name@example.com"
                        onChange={props.onUpdateClientEmail}
                        value={props.clientEmail}
                        type="email" />
                </div>
            </div>
        </div>
        );
};

ClientContactInfo.propTypes = {
    onUpdateClientName: PropTypes.func.isRequired,
    onUpdateClientAddress: PropTypes.func.isRequired,
    onUpdateClientPhone: PropTypes.func.isRequired,
    onUpdateClientEmail: PropTypes.func.isRequired,
    clientName: PropTypes.string.isRequired,
    clientAddress: PropTypes.string.isRequired,
    clientPhone: PropTypes.string.isRequired,
    clientEmail: PropTypes.string.isRequired
};

module.exports = ClientContactInfo;
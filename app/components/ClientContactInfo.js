var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function ClientContactInfo(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <h3>Client Contact Info</h3>
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-4">
                    <input
                        className="form-control"
                        placeholder="Name:"
                        onChange={props.onUpdateClientName}
                        value={props.clientName}
                        type="text" />
                </div>
                
                <div className="col-sm-4">
                    <input
                        className="form-control"
                        placeholder="E-Mail:"
                        onChange={props.onUpdateClientEmail}
                        value={props.clientEmail}
                        type="email" />
                </div>
            </div>

            <div className="row" style={styles.space}>
                <div className="col-sm-4">
                    <input
                        className="form-control"
                        placeholder="Phone:"
                        onChange={props.onUpdateClientPhone}
                        value={props.clientPhone}
                        type="tel" />
                </div>
                
                <div className="col-sm-8">
                    <input
                        className="form-control"
                        placeholder="Address:"
                        onChange={props.onUpdateClientAddress}
                        value={props.clientAddress}
                        type="text" />
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
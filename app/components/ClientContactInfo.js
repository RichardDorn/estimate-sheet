var React = require('react');
var PropTypes = React.PropTypes;

function ClientContactInfo(props) {
    return (
        <div>
            <h3>Client Contact Info</h3>
            <p>Name:</p>
            <input
                className="form-control"
                placeholder="Enter Client Name"
                onChange={props.onUpdateClientName}
                value={props.clientName}
                type="text" />
            <p>Address:</p>
            <input
                className="form-control"
                placeholder="Enter Client Address"
                onChange={props.onUpdateClientAddress}
                value={props.clientAddress}
                type="text" />
            <p>Phone:</p>
                <input
                className="form-control"
                placeholder="Enter Client Phone Number"
                onChange={props.onUpdateClientPhone}
                value={props.clientPhone}
                type="text" />
            <p>E-Mail:</p>
                <input
                className="form-control"
                placeholder="Enter Client E-Mail Address"
                onChange={props.onUpdateClientEmail}
                value={props.clientEmail}
                type="text" />
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
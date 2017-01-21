var React = require('react');
var ClientContactInfo = require('../../components/ClientContactInfo');
import {connect} from "react-redux";
import {updateClientName} from "./clientContactInfoActions";
import {updateClientAddress} from "./clientContactInfoActions";
import {updateClientPhone} from "./clientContactInfoActions";
import {updateClientEmail} from "./clientContactInfoActions";


@connect((store) => {
    return {
        clientName: store.clientContactInfo.clientName,
        clientAddress: store.clientContactInfo.clientAddress,
        clientPhone: store.clientContactInfo.clientPhone,
        clientEmail: store.clientContactInfo.clientEmail,
    };
})

export default class ClientContactInfoContainer extends React.Component {
    

    handleUpdateClientName(e){
        var value = e.target.value;
        this.props.dispatch(updateClientName(value));
    }

    handleUpdateClientAddress(e){
        var value = e.target.value;
        this.props.dispatch(updateClientAddress(value));
    }

    handleUpdateClientPhone(e){
        var value = e.target.value;
        this.props.dispatch(updateClientPhone(value));
    }

    handleUpdateClientEmail(e){
        var value = e.target.value;
        this.props.dispatch(updateClientEmail(value));
    }
    
    render() {
        return (
            <ClientContactInfo 
                onUpdateClientName={this.handleUpdateClientName.bind(this)}
                onUpdateClientAddress={this.handleUpdateClientAddress.bind(this)}
                onUpdateClientPhone={this.handleUpdateClientPhone.bind(this)}
                onUpdateClientEmail={this.handleUpdateClientEmail.bind(this)}
                clientName={this.props.clientName}
                clientAddress={this.props.clientAddress}
                clientPhone={this.props.clientPhone}
                clientEmail={this.props.clientEmail} />
            );
}
};
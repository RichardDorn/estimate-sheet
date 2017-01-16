var React = require('react');
var ClientContactInfo = require('../components/ClientContactInfo');

var ClientContactInfoContainer = React.createClass({
    getInitialState: function(){
        return {
            clientName: '',
            clientAddress: '',
            clientPhone: '',
            clientEmail: ''
        }
    },

    handleUpdateClientName: function(e){
        this.setState({
            clientName: e.target.value
        });
    },

    handleUpdateClientAddress: function(e){
        this.setState({
            clientAddress: e.target.value
        });
    },

    handleUpdateClientPhone: function(e){
        this.setState({
            clientPhone: e.target.value
        });
    },

    handleUpdateClientEmail: function(e){
        this.setState({
            clientEmail: e.target.value
        });
    },
    
    render: function () {
        return (
            <ClientContactInfo 
                onUpdateClientName={this.handleUpdateClientName}
                onUpdateClientAddress={this.handleUpdateClientAddress}
                onUpdateClientPhone={this.handleUpdateClientPhone}
                onUpdateClientEmail={this.handleUpdateClientEmail}
                clientName={this.state.clientName}
                clientAddress={this.state.clientAddress}
                clientPhone={this.state.clientPhone}
                clientEmail={this.state.clientEmail} />
            );
}
});

module.exports = ClientContactInfoContainer;
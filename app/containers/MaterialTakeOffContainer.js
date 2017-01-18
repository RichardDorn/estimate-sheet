var React = require('react');
var MaterialTakeOff = require('../components/MaterialTakeOff');
var PolySheeting = require('../components/PolySheeting');

var MaterialTakeOffContainer = React.createClass({
    getInitialState: function () {
        return {
            polySheeting: {
                four_TenClearQuantity: 0,
                four_TenClearCost: 0,
                four_TwentyEqQuantity: 0,
                four_TwentyEqCost: 0,
                four_TwentyQuantity: 0,
                four_TwentyCost: 0,
                four_TwentyBlackQuantity: 0,
                four_TwentyBlackCost: 0,
                six_TwentyEqQuantity: 0,
                six_TwentyEqCost: 0,
                six_TwentyClearQuantity: 0,
                six_TwentyClearCost: 0,
                six_TwentyBlackQuantity: 0,
                six_TwentyBlackCost: 0,
                totalCost: 0
            },
        }
    },

    handleUpdateFour_TenClear: function (e) {
        var polySheeting = this.state.polySheeting;
        polySheeting.four_TenClearQuantity = parseInt(e.target.value);
        polySheeting.four_TenClearCost = parseInt(e.target.value) * 22.25;
        this.setState({
            polySheeting: polySheeting
        });
    },

    handleUpdateFour_TwentyEq: function (e) {
        var polySheeting = this.state.polySheeting;
        polySheeting.four_TwentyEqQuantity = parseInt(e.target.value);
        polySheeting.four_TwentyEqCost = parseInt(e.target.value) * 1 ; //Remove place holder price!! Add real price
        this.setState({
            polySheeting: polySheeting
        });
    },

    handleUpdateFour_Twenty: function (e) {
        var polySheeting = this.state.polySheeting;
        polySheeting.four_TwentyQuantity = parseInt(e.target.value);
        polySheeting.four_TwentyCost = parseInt(e.target.value) * 43.80 ;
        this.setState({
            polySheeting: polySheeting
        });
    },

    handleUpdateFour_TwentyBlack: function (e) {
        var polySheeting = this.state.polySheeting;
        polySheeting.four_TwentyBlackQuantity = parseInt(e.target.value);
        polySheeting.four_TwentyBlackCost = parseInt(e.target.value) * 43.00 ;
        this.setState({
            polySheeting: polySheeting
        });
    },

    handleUpdateSix_TwentyEq: function (e) {
        var polySheeting = this.state.polySheeting;
        polySheeting.six_TwentyEqQuantity = parseInt(e.target.value);
        polySheeting.six_TwentyEqCost = parseInt(e.target.value) * 48.50 ;
        this.setState({
            polySheeting: polySheeting
        });
    },

    handleUpdateSix_TwentyClear: function (e) {
        var polySheeting = this.state.polySheeting;
        polySheeting.six_TwentyClearQuantity = parseInt(e.target.value);
        polySheeting.six_TwentyClearCost = parseInt(e.target.value) * 70.50;
        this.setState({
            polySheeting: polySheeting
        });
    },

    handleUpdateSix_TwentyBlack: function (e) {
        var polySheeting = this.state.polySheeting;
        polySheeting.six_TwentyBlackQuantity = parseInt(e.target.value);
        polySheeting.six_TwentyBlackCost = parseInt(e.target.value) * 60.00;
        this.setState({
            polySheeting: polySheeting
        });
    },

    handleFocusQuantity: function(e){
        e.target.select();
    },

    render: function () {
        return (
            <MaterialTakeOff>
                <PolySheeting 
                    onUpdateFour_TenClear={this.handleUpdateFour_TenClear}
                    onFocusQuantity={this.handleFocusQuantity}
                    four_TenClearQuantity={this.state.polySheeting.four_TenClearQuantity}
                    four_TenClearCost={this.state.polySheeting.four_TenClearCost}
                    
                    onUpdateFour_TwentyEq={this.handleUpdateFour_TwentyEq}
                    onFocusQuantity={this.handleFocusQuantity}
                    four_TwentyEqQuantity={this.state.polySheeting.four_TwentyEqQuantity}
                    four_TwentyEqCost={this.state.polySheeting.four_TwentyEqCost}
                    
                    onUpdateFour_Twenty={this.handleUpdateFour_Twenty}
                    onFocusQuantity={this.handleFocusQuantity}
                    four_TwentyQuantity={this.state.polySheeting.four_TwentyQuantity}
                    four_TwentyCost={this.state.polySheeting.four_TwentyCost}
                    
                    onUpdateFour_TwentyBlack={this.handleUpdateFour_TwentyBlack}
                    onFocusQuantity={this.handleFocusQuantity}
                    four_TwentyBlackQuantity={this.state.polySheeting.four_TwentyBlackQuantity}
                    four_TwentyBlackCost={this.state.polySheeting.four_TwentyBlackCost}
                    
                    onUpdateSix_TwentyEq={this.handleUpdateSix_TwentyEq}
                    onFocusQuantity={this.handleFocusQuantity}
                    six_TwentyEqQuantity={this.state.polySheeting.six_TwentyEqQuantity}
                    six_TwentyEqCost={this.state.polySheeting.six_TwentyEqCost}
                    
                    onUpdateSix_TwentyClear={this.handleUpdateSix_TwentyClear}
                    onFocusQuantity={this.handleFocusQuantity}
                    six_TwentyClearQuantity={this.state.polySheeting.six_TwentyClearQuantity}
                    six_TwentyClearCost={this.state.polySheeting.six_TwentyClearCost}
                    
                    onUpdateSix_TwentyBlack={this.handleUpdateSix_TwentyBlack}
                    onFocusQuantity={this.handleFocusQuantity}
                    six_TwentyBlackQuantity={this.state.polySheeting.six_TwentyBlackQuantity}
                    six_TwentyBlackCost={this.state.polySheeting.six_TwentyBlackCost} />
            </MaterialTakeOff>
            );
    }
});

module.exports = MaterialTakeOffContainer;
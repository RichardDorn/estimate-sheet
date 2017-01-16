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

    render: function () {
        return (
            <MaterialTakeOff>
                <PolySheeting 
                    onUpdateFour_TenClear={this.handleUpdateFour_TenClear}
                    four_TenClearQuantity={this.state.polySheeting.four_TenClearQuantity}
                    four_TenClearCost={this.state.polySheeting.four_TenClearCost} />
            </MaterialTakeOff>
            );
    }
});

module.exports = MaterialTakeOffContainer;
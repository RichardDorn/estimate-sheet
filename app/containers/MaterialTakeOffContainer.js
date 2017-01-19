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

    updateMaterial: function (materialSet, materialQuantityKey, materialCostKey, value, price) {
        var ms = this.state[materialSet];
        if(isNaN(value)){
            ms[materialQuantityKey] = 0;
            ms[materialCostKey] = 0;
        }else{
            ms[materialQuantityKey] = parseInt(value);
            ms[materialCostKey] = parseInt(value) * price;
        }
        this.setState({
            materialSet: ms
        });
    },

    handleUpdateFour_TenClear: function (e) {
        var value = e.target.value;
        this.updateMaterial('polySheeting', 'four_TenClearQuantity', 'four_TenClearCost', value, 22.25);
    },

    handleUpdateFour_TwentyEq: function (e) {
        var value = e.target.value;
        this.updateMaterial('polySheeting', 'four_TwentyEqQuantity', 'four_TwentyEqCost', value, 1.00);
    },

    handleUpdateFour_Twenty: function (e) {
        var value = e.target.value;
        this.updateMaterial('polySheeting', 'four_TwentyQuantity', 'four_TwentyCost', value, 43.80);
    },

    handleUpdateFour_TwentyBlack: function (e) {
        var value = e.target.value;
        this.updateMaterial('polySheeting', 'four_TwentyBlackQuantity', 'four_TwentyBlackCost', value, 43.00);
    },

    handleUpdateSix_TwentyEq: function (e) {
        var value = e.target.value;
        this.updateMaterial('polySheeting', 'six_TwentyEqQuantity', 'six_TwentyEqCost', value, 48.50);
    },

    handleUpdateSix_TwentyClear: function (e) {
        var value = e.target.value;
        this.updateMaterial('polySheeting', 'six_TwentyClearQuantity', 'six_TwentyClearCost', value, 70.50);
    },

    handleUpdateSix_TwentyBlack: function (e) {
        var value = e.target.value;
        this.updateMaterial('polySheeting', 'six_TwentyBlackQuantity', 'six_TwentyBlackCost', value, 60.00);
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
var React = require('react');
var PolySheeting = require('../../components/PolySheeting');
import {connect} from "react-redux";
import {updateFour_TenClear} from "./polySheetingActions";
import {updateFour_TwentyEq} from "./polySheetingActions";
import {updateFour_Twenty} from "./polySheetingActions";
import {updateFour_TwentyBlack} from "./polySheetingActions";
import {updateSix_TwentyEq} from "./polySheetingActions";
import {updateSix_TwentyClear} from "./polySheetingActions";
import {updateSix_TwentyBlack} from "./polySheetingActions";
import {calcTotalPolyCost} from "./polySheetingActions";

@connect((store) => {
    return {
        four_TenClearQuantity: store.polySheeting.four_TenClearQuantity,
        four_TenClearCost: store.polySheeting.four_TenClearCost,
        four_TwentyEqQuantity: store.polySheeting.four_TwentyEqQuantity,
        four_TwentyEqCost: store.polySheeting.four_TwentyEqCost,
        four_TwentyQuantity: store.polySheeting.four_TwentyQuantity,
        four_TwentyCost: store.polySheeting.four_TwentyCost,
        four_TwentyBlackQuantity: store.polySheeting.four_TwentyBlackQuantity,
        four_TwentyBlackCost: store.polySheeting.four_TwentyBlackCost,
        six_TwentyEqQuantity: store.polySheeting.six_TwentyEqQuantity,
        six_TwentyEqCost: store.polySheeting.six_TwentyEqCost,
        six_TwentyClearQuantity: store.polySheeting.six_TwentyClearQuantity,
        six_TwentyClearCost: store.polySheeting.six_TwentyClearCost,
        six_TwentyBlackQuantity: store.polySheeting.six_TwentyBlackQuantity,
        six_TwentyBlackCost: store.polySheeting.six_TwentyBlackCost,
    };
})

export default class PolySheetingContainer extends React.Component {
    componentDidUpdate(){
        var newTotal = this.props.four_TenClearCost + this.props.four_TwentyEqCost + this.props.four_TwentyCost + this.props.four_TwentyBlackCost +this.props. six_TwentyEqCost + this.props.six_TwentyClearCost + this.props.six_TwentyBlackCost;
        this.props.dispatch(calcTotalPolyCost(newTotal.toFixed(2)));
    }
    
    handleUpdateFour_TenClear (e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateFour_TenClear(value));
    }

    handleUpdateFour_TwentyEq(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateFour_TwentyEq(value));
    }

    handleUpdateFour_Twenty(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateFour_Twenty(value));
    }

    handleUpdateFour_TwentyBlack(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateFour_TwentyBlack(value));
    }

    handleUpdateSix_TwentyEq(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateSix_TwentyEq(value));
    }

    handleUpdateSix_TwentyClear(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateSix_TwentyClear(value));
    }

    handleUpdateSix_TwentyBlack(e){
        var value = parseInt(e.target.value);
        this.props.dispatch(updateSix_TwentyBlack(value));
    }

    handleFocusQuantity(e){
        e.target.select();
    }
    
    render(){
        return(
                <PolySheeting
                    onFocusQuantity={this.handleFocusQuantity}

                    onUpdateFour_TenClear={this.handleUpdateFour_TenClear.bind(this)}
                    four_TenClearQuantity={this.props.four_TenClearQuantity}
                    four_TenClearCost={this.props.four_TenClearCost}
                    
                    onUpdateFour_TwentyEq={this.handleUpdateFour_TwentyEq.bind(this)}
                    four_TwentyEqQuantity={this.props.four_TwentyEqQuantity}
                    four_TwentyEqCost={this.props.four_TwentyEqCost}
                    
                    onUpdateFour_Twenty={this.handleUpdateFour_Twenty.bind(this)}
                    four_TwentyQuantity={this.props.four_TwentyQuantity}
                    four_TwentyCost={this.props.four_TwentyCost}
                    
                    onUpdateFour_TwentyBlack={this.handleUpdateFour_TwentyBlack.bind(this)}
                    four_TwentyBlackQuantity={this.props.four_TwentyBlackQuantity}
                    four_TwentyBlackCost={this.props.four_TwentyBlackCost}
                    
                    onUpdateSix_TwentyEq={this.handleUpdateSix_TwentyEq.bind(this)}
                    six_TwentyEqQuantity={this.props.six_TwentyEqQuantity}
                    six_TwentyEqCost={this.props.six_TwentyEqCost}
                    
                    onUpdateSix_TwentyClear={this.handleUpdateSix_TwentyClear.bind(this)}
                    six_TwentyClearQuantity={this.props.six_TwentyClearQuantity}
                    six_TwentyClearCost={this.props.six_TwentyClearCost}
                    
                    onUpdateSix_TwentyBlack={this.handleUpdateSix_TwentyBlack.bind(this)}
                    six_TwentyBlackQuantity={this.props.six_TwentyBlackQuantity}
                    six_TwentyBlackCost={this.props.six_TwentyBlackCost} />
            );
    }
};
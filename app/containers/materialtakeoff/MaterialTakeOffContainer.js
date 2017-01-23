import React from "react";
import MaterialTakeOff from "../../components/MaterialTakeOff";
import PolySheetingContainer from "../polysheeting/PolySheetingContainer";
import BagsBarrelsContainer from "../bagsbarrels/BagsBarrelsContainer";

var MaterialTakeOffContainer = React.createClass({

    render: function () {
        return (
            <MaterialTakeOff>
                <PolySheetingContainer />
                <BagsBarrelsContainer />
            </MaterialTakeOff>
            );
    }
});

module.exports = MaterialTakeOffContainer;
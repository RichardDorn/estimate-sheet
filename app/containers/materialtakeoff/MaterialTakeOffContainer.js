var React = require('react');
var MaterialTakeOff = require('../../components/MaterialTakeOff');
var PolySheetingContainer = require('../polysheeting/PolySheetingContainer');
var BagsBarrelsContainer = require('../bagsbarrels/BagsBarrelsContainer');

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
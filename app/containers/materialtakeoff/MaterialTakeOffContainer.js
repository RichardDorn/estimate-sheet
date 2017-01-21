var React = require('react');
var MaterialTakeOff = require('../../components/MaterialTakeOff');
var PolySheetingContainer = require('../polysheeting/PolySheetingContainer');

var MaterialTakeOffContainer = React.createClass({

    render: function () {
        return (
            <MaterialTakeOff>
                <PolySheetingContainer/>
            </MaterialTakeOff>
            );
    }
});

module.exports = MaterialTakeOffContainer;
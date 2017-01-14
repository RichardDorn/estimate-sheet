var React = require('react');
var ProjectInfo = require('../components/ProjectInfo');

var ProjectInfoContainer = React.createClass({
    getInitialState: function(){
        return {
            estimateNumber: '',
            projectAddress: ''
        }
    },

    handleUpdateEstimateNumber: function(e){
        this.setState({
            estimateNumber: e.target.value
        });
    },

    handleUpdateProjectAddress: function(e){
        this.setState({
            projectAddress: e.target.value
        });
    },
    
    render: function () {
        return (
            <ProjectInfo 
                onUpdateEstimateNumber={this.handleUpdateEstimateNumber}
                onUpdateProjectAddress={this.handleUpdateProjectAddress}
                estimateNumber={this.state.estimateNumber}
                projectAddress={this.state.projectAddress} />
            );
    }
});

module.exports = ProjectInfoContainer;
var React = require('react');
var ProjectInfoContainer = require('../containers/ProjectInfoContainer');
var MaterialTakeOffContainer = require('../containers/MaterialTakeOffContainer');

function Home (props){
        return (
            <form>
                <ProjectInfoContainer />
                <MaterialTakeOffContainer />
            </form>
        );
};

module.exports = Home;
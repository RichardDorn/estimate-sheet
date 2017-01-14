var React = require('react');
var ProjectInfoContainer = require('../containers/ProjectInfoContainer');

function Home (props){
        return (
            <form>
                <ProjectInfoContainer />
            </form>
        );
};

module.exports = Home;
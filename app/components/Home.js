var React = require('react');
var ProjectInfoContainer = require('../containers/ProjectInfoContainer');
var MaterialTakeOffContainer = require('../containers/MaterialTakeOffContainer');
var styles = require('../styles');

function Home (props){
    return (
        <div className="container" style={styles.homeContainer}>
                <form>
                    <ProjectInfoContainer />
                    <MaterialTakeOffContainer />
                </form>
            </div>
        );
};

module.exports = Home;
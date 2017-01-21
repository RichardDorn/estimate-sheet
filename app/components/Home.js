var React = require('react');
var ProjectInfoContainer = require('../containers/projectinfo/ProjectInfoContainer');
var MaterialTakeOffContainer = require('../containers/materialtakeoff/MaterialTakeOffContainer');
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
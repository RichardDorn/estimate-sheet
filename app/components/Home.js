var React = require('react');
var ProjectInfoContainer = require('../containers/projectinfo/ProjectInfoContainer');
var MaterialTakeOffContainer = require('../containers/materialtakeoff/MaterialTakeOffContainer');
var styles = require('../styles');
import Paper from 'material-ui/Paper';

function Home (props){
    return (
        <Paper zDepth={2} className="container" style={styles.homeContainer}>
            <form>
                <ProjectInfoContainer />
                <MaterialTakeOffContainer />
            </form>
        </Paper>
        );
};

module.exports = Home;
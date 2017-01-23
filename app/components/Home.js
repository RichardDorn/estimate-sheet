import React from "react";
import ProjectInfoContainer from "../containers/projectinfo/ProjectInfoContainer";
import MaterialTakeOffContainer from "../containers/materialtakeoff/MaterialTakeOffContainer";
import styles from "../styles";
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
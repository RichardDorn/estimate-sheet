var React = require('react');
var styles = require('../styles');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Main = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <div className='main-container' style={styles.bodyFont}>
                    <h1> Estimate Sheet </h1>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
});

module.exports = Main;
var React = require('react');
var styles = require('../styles');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var Main = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <div className='main-container' style={styles.bodyFont}>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="../../app/images/logo.png" style={styles.logoStyle} />
                        </div>
                        <div className="col-xs-offset-3 col-sm-offset-1 col-sm-4" style={styles.titleStyle}>
                            <h1> Estimate Sheet </h1>
                        </div>
                    </div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
});

module.exports = Main;
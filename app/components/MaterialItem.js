var React = require('react');
var styles = require('../styles');

function MaterialItem(props) {
    return (
        <div className="row" style={styles.space}>    
            {props.children}
        </div>
        );
};

module.exports = MaterialItem;
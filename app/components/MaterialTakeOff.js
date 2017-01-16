var React = require('react');

function MaterialTakeOff(props) {
    return (
        <div className="form-group">
            <h2><u>Material Take Off</u></h2>
            {props.children}
        </div>
        );
};

module.exports = MaterialTakeOff;
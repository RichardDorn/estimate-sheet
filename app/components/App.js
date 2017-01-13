var React = require('react');

var App = React.createClass({
    render: function () {
        return (
            <div className='jumbotron col-sm-6 col-sm-offset-3'>
                <h1> Estimate Sheet </h1>
                <button type='button' className='btn btn-lg btn-success'>
                    Begin
                </button>
            </div>
        );
    }
});

module.exports = App;
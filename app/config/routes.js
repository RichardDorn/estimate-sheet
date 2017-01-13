var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var App = require('../components/App');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
           
        </Route>
    </Router>
);

module.exports = routes;
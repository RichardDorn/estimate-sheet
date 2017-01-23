import React from "react";
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
import Main from "../components/Main";
import Home from "../components/Home";
import {Provider} from "react-redux";
import store from "../store";

var routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
               <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
);

module.exports = routes;
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Switch} from "react-router"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
    <Router>
        <Switch>
            <App/>
        </Switch>
    </Router>,
    document.getElementById('root')
);



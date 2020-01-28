import React from 'react';
import { Router, Switch, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import ReactDOM from 'react-dom';
import App from './App';
import AboutMe from './AboutMe';
import Header from './Header'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route path='/projects' render={() => <Header Component={App} path='/projects'/>} />
            <Route exact path='/' render={() => <Header Component={AboutMe} path='/'/>} />
        </Switch>
    </Router>,
    document.getElementById('root'));

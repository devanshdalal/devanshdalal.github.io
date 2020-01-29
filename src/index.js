import React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import AboutMe from './AboutMe';
import Header from './Header'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path='/projects' render={() => <Header Component={App} path='/projects'/>} />
            <Route exact path='/' render={() => <Header Component={AboutMe} path='/'/>} />
        </Switch>
    </HashRouter>,
    document.getElementById('root'));

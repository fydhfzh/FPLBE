import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Login from './pages/login'
import Data from './pages/Data'

function routes() {
    return (

            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/login' component={Login}/>
            <Route path='/data' component={Data}/>
            </Switch>
        
    );
}

export default routes

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render = {() => <Home />} />
            <Route path="/dashboard" render = {() => <Dashboard />} />
        </Switch>
    </BrowserRouter>
)
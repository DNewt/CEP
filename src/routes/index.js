import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Components/Home';
import Dashboard from '../Components/Dashboard';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render = {() => <Home />} />
            <Route path="/dashboard" render = {() => <Dashboard />} />
        </Switch>
    </BrowserRouter>
)
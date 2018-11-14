import React, {Component} from 'react'
import Resources from './Resources'
import Drawer from './Drawer'

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <Drawer />
      </div>
    );
  }
}

export default Dashboard;

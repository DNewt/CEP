import React, {Component} from 'react'
import Drawer from './Drawer'

class Dashboard extends Component {

  render() {
    return (
      <div className="App">
        <Drawer />
        {/* <Switch>
          <Route path="/dashboard/resources" component={Resources} />
        </Switch> */}
      </div>
    );
  }
}

export default (Dashboard);

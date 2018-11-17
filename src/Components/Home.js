import React, {Component} from 'react'
import Signin from './Signin'
import Title from './Title'
import Dashboard from './Dashboard'

import {connect} from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        {this.props.user ?
          <Dashboard/>
        :
          <Signin />        
        }
      </div>
    );
  }
}

const mapDispatchToProps = {}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);

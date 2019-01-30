import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import Signin from './auth/Signin'
import Title from './Title'
import Dashboard from './Dashboard'

import {checkLoggedIn} from '../actions/auth'
import {connect} from 'react-redux'

class Home extends Component {

  componenetDidMount() {
    this.props.checkLoggedIn();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.history.push("/dashboard")
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Signin />        
      </div>
    );
  }
}

const mapDispatchToProps = {
  checkLoggedIn
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

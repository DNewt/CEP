import React, {Component} from 'react'
import Signin from './Signin'
import Title from './Title'
import {withRouter} from 'react-router-dom'
import Dashboard from './Dashboard'

import {connect} from 'react-redux'

class Home extends Component {

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

const mapDispatchToProps = {}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

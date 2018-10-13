import React, {Component} from 'react'
import Signin from './Signin'
import Title from './Title'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Title />
       <Signin />
      </div>
    );
  }
}

export default Home;

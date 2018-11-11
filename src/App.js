import React, { Component } from 'react';
import {connect} from "react-redux";
import './App.css';

class App extends Component {
  increment = () => {
    this.props.dispatch({type : "INCREMENT"});
  }
  decrement = () => {
    this.props.dispatch({type : "DECREMENT"});
  }
  render() {
    return (
      <div>
        <center>
          <h1>{this.props.count}</h1>
          <button onClick={this.decrement}>Kurang</button>
          <button onClick={this.increment}>Tambah</button>
        </center>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    count : state.count
  }
}

export default connect(mapStateToProps)(App)
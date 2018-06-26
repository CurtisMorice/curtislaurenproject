import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
  reduxState
})


class App extends Component {
  constructor() {
    super();
    this.state = {
      snack: ''
    }
  }

  handleSnacks = (event) => {
    this.setState({
      snack: event.target.value
    })
  }

  addSnacks = () => {
    const action = {type: 'ADD_SNACK', payload: this.state.snack};
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to C&L Snacks</h1>
        </header>
        <input onChange={this.handleSnacks} value={this.state.snacks} />
        <button onClick={this.addSnacks}>Add Snack (NOM NOM)</button>

      <ul>
        {this.props.reduxState.ourReducer.map((snack, i) => {
          return <li key={i}>{snack}</li>
        })}
      </ul>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);

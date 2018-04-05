import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        { firstName: 'Alan', lastName: 'Turing' },
        { firstName: 'Alanzo', lastName: 'Church' },
        { firstName: 'Grace', lastName: 'Hopper' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        I am the app!
      </div>
    );
  }
}
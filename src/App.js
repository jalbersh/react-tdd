import React, { Component } from 'react';
import Peoples from './components/Peoples'
//import store from './utils/store'
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          people: [
            { firstName: 'Alan', lastName: 'Turing' },
            { firstName: 'Alanzo', lastName: 'Church' },
            { firstName: 'Grace', lastName: 'Hopper' }
          ]
      };
      this.handleClick = this.handleClick.bind(this)
      this.handleAdd = this.handleAdd.bind(this)
  }

//  componentWillMount() {
//        console.log('in app.componentWillMount')
//  }

  handleAdd(person) {
    console.log('in app.handleAdd',person,this.props,this.state)
    const people = this.state.people
    if (people && people.length > 0) {
        const newPeople = people.slice();
        if (person) {
           newPeople.push(person);
        }
        console.log('new people',newPeople)
        this.setState({people: newPeople})
    }
  }

  handleClick(e) {
        this.props.history.push('/addPerson',{people: this.state.people})
  }

  render() {
//    console.log('App.render state',this.state, 'props', this.props)
    const pp = this.props.people
    const sp = this.state.people
    let people
    if (pp) {
           people = pp.length > sp.length ? pp : sp
    }  else {
           people = sp
    }
//    console.log('app.render people',people)
    return (
      <div className="App">
        <button className="addPerson" onClick={this.handleClick}>Add Person</button>
        <Peoples people={people} history={ this.props.history } />
      </div>
    )
  }
}

export function mapStateToProps(state) {
    return {people: state.people}
}

export default connect(
  mapStateToProps,
  null
)(App);

//export default App
import React, { Component } from 'react';
//import { connect } from 'react-redux'
//import store from '../utils/store'

class Peoples extends Component {
  constructor(props) {
        super(props);
        this.state={people: this.props.people}
        this.rowClick = this.rowClick.bind(this)
  }

  rowClick(e) {
        e.preventDefault()
//        console.log('in rowClick')
        const target = e.target
        const parent = target.parentNode
        const cells = parent.cells
        const firstName = cells && cells[0].childNodes ? cells[0].childNodes[0].data : null
        const lastName = cells && cells[1].childNodes ? cells[1].childNodes[0].data : null
        let person = null
        if (firstName && lastName) {
            person = {firstName,lastName}
//            console.log('person',person)
        }
        this.props.history.push('/editPerson',{people: this.state.people, person: person})
  }

  render() {
//    console.log('People render props',this.props,'state',this.state)
    let people = this.props.people
// Given that I see people in the list, when I click a person, I am taken to a Person Edit page.
    return (
      <table className="myClass" onClick={this.rowClick}>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          {people.map((item, index) => (
            <tr key={index}>
              <td>
                {item ? item.firstName : 'first'}
              </td>
              <td>
                {item ? item.lastName : 'last'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

//export function mapStateToProps(state) {
//    console.log('people mapStateToProps people',state.people)
//    return {people: state.people}
//}
//
//export default connect(
//  mapStateToProps,
//  null
//)(People);

export default Peoples
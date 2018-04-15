import React, { Component } from 'react';
//import { connect } from 'react-redux'

class People extends Component {
  constructor(props) {
        super(props);
        this.state={people: this.props.people}
  }

//  async componentDidMount() {
//        console.log('People.componentDidMount state',this.state, 'props', this.props)
//        store.dispatch({type: GET_PEOPLE, people:this.state.people})
//  }

  render() {
//    console.log('People render props',this.props,'state',this.state)
    const pp = this.props.people
    const sp = this.state.people
//    console.log('pp',pp,'sp',sp)
    let people
    if (pp) {
           people = pp.length > sp.length ? pp : sp
    }  else {
           people = sp
    }
//    console.log('people',people)
    return (
      <table className="myClass">
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
                {item.firstName}
              </td>
              <td>
                {item.lastName}
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

export default People
import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleEdit } from '../actions/actions'
import store from '../utils/store'
import {
        DELETE_PERSON_SUCCESS,
        SET_PERSON,
        SET_OLD_PERSON
        } from '../utils/constants'

class EditPerson extends Component {

  constructor(props) {
      super(props)
      this.submitHandler = this.submitHandler.bind(this)
      this.deletePerson = this.deletePerson.bind(this)
      this.state={
        people: this.props.people,
        person: this.props.person,
        fname: this.props.person.firstName,
        lname: this.props.person.lastName
//        ,old_person: this.props.old_person
      }
//      console.log('props',this.props)
  }

  componentDidMount() {
//        console.log('EditPerson.componentDidMount state',this.state, 'props', this.props)
//        const people = this.props && this.props.history && this.props.history.location && this.props.history.location.state ? this.props.history.location.state.people : null
        const person = this.props && this.props.history && this.props.history.location && this.props.history.location.state ? this.props.history.location.state.person : null
//        console.log('person',person)
        if (person) {
            store.dispatch({type: SET_PERSON, person})
            store.dispatch({type: SET_OLD_PERSON, person})
//            store.dispatch({fname,person.firstName,lname:person.lastName})
            this.setState({fname: person.firstName})
            this.setState({lname: person.lastName})
        }
  }

  deletePerson(e) {
        e.preventDefault()
        const person = this.props.person
//        console.log('in deletePerson',person,this.props,this.state)
        const people = this.props.people
//        console.log('deletePerson people',people)
        store.dispatch({type: DELETE_PERSON_SUCCESS, people, person})
        this.props.history.push('/')
  }

  submitHandler(e) {
        e.preventDefault()
        e.target.reset()
//        console.log('submitHandler props',this.props,'state',this.state)
//        const old_name = this.props.old_name
//        console.log('old_name',old_name)
        const fname = this.state.fname
//        console.log('fname',fname)
        const lname = this.state.lname
//        console.log('lname',lname)
        const new_person = {firstName: fname, lastName: lname}
//        console.log('new_person',new_person)
        this.props.history.push('/')
//        store.dispatch({type: ADD_PERSON_SUCCESS, people: this.props.people, person: {firstName: fname, lastName: lname}})
        store.dispatch(handleEdit(new_person))
        this.props.history.push('/')
  }

  render() {
//    console.log('EditPerson.render props',this.props,'state',this.state)
    return (
      <div>
        <Row style={{ marginTop: '15vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form  onSubmit={this.submitHandler}>
              <FormGroup>
                <Label for="fname-field">First Name</Label>
                <Input
                  type="text"
                  name="fname"
                  id="fname-field"
                  placeholder="first name"
                  defaultValue={this.state.fname}
                  value={this.state.fname}
                  onChange={e => this.setState({fname: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lname-field">Last Name</Label>
                <Input
                  type="text"
                  name="lname"
                  id="lname-field"
                  placeholder="last name"
                  defaultValue={this.state.lname}
                  value={this.state.lname}
                  onChange={e => this.setState({lname: e.target.value})}
                />
              </FormGroup>
              <Button className="mr-3" type="submit" color="primary">
                Edit
              </Button>
              <Button className="mr-3" type="button" onClick={this.deletePerson} color="primary">
                Delete
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    person: state.person || {firstName:'', lastName:''}
    ,old_person: state.old_person || {firstName:'', lastName:''}
    ,people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleEdit: bindActionCreators(handleEdit, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPerson)
//export default AddPerson
//    ,fname: state.fname || ''
//    ,lname: state.lname || ''

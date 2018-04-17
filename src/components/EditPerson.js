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
        SET_PERSON
        } from '../utils/constants'

class EditPerson extends Component {

  constructor(props) {
      super(props)
      this.submitHandler = this.submitHandler.bind(this)
      this.state={
//        people: this.props.people,
        person: this.props.person
      }
  }

  componentDidMount() {
//        console.log('EditPerson.componentDidMount state',this.state, 'props', this.props)
//        const people = this.props && this.props.history && this.props.history.location && this.props.history.location.state ? this.props.history.location.state.people : null
        const person = this.props && this.props.history && this.props.history.location && this.props.history.location.state ? this.props.history.location.state.person : null
//        console.log('people',people)
        if (person) {
            store.dispatch({type: SET_PERSON, person})
        }
//        store.dispatch({type: GET_PEOPLE, people:this.state.people})
  }

  submitHandler(e) {
        e.preventDefault()
        e.target.reset()
        const fname = this.state.fname
//        console.log('fname',fname)
        const lname = this.state.lname
//        console.log('lname',lname)
        this.props.history.push('/')
//        store.dispatch({type: ADD_PERSON_SUCCESS, people: this.props.people, person: {firstName: fname, lastName: lname}})
        store.dispatch(handleEdit({firstName: fname, lastName: lname}))
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
                  defaultValue=""
                  value={this.props && this.props.person ? this.props.person.firstName : ''}
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
                  defaultValue=""
                  value={this.props && this.props.person ? this.props.person.lastName : ''}
                  onChange={e => this.setState({lname: e.target.value})}
                />
              </FormGroup>
              <Button className="mr-3" type="submit" color="primary">
                Edit
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
//    ,people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleEdit: bindActionCreators(handleEdit, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPerson)
//export default AddPerson
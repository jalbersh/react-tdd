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
import { handleAdd } from '../actions/actions'
import store from '../utils/store'
import { GET_PEOPLE } from '../utils/constants'

class AddPerson extends Component {

  constructor(props) {
      super(props)
      this.submitHandler = this.submitHandler.bind(this)
      this.state={people: this.props.people}
  }

  componentWillMount() {
//        console.log('AddPerson.componentWillMount state',this.state, 'props', this.props)
        const people = this.props && this.props.location && this.props.location.state ? this.props.location.state.people : null
        if (people) {
            store.dispatch({type: GET_PEOPLE, people:people})
        }
  }

  submitHandler(e) {
        e.preventDefault()
        e.target.reset()
        const fname = this.state.fname
        const lname = this.state.lname
        this.props.history.push('/')
        store.dispatch(handleAdd({firstName: fname, lastName: lname}))
  }

  render() {
//    console.log('AddPerson.render props',this.props,'state',this.state)
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
                  value={this.props.fname}
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
                  value={this.props.lname}
                  onChange={e => this.setState({lname: e.target.value})}
                />
              </FormGroup>
              <Button name="add" id="add" className="mr-3" type="submit" color="primary">
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

//function mapStateToProps(state) {
//  return {
//    lname: state.lname,
//    fname: state.fname
////    ,
////    people: state.people
//  }
//}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: bindActionCreators(handleAdd, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddPerson)
//export default AddPerson
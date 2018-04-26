import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import EditPerson from '../components/EditPerson';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockRouter from 'react-mock-router';
import { Router, Route } from 'react-router-dom'
import {browserHistory} from 'react-router';
import { history } from '../utils/history';

describe("for the EditPerson component", () => {
   let store
   let wrapper
   let mockHandle = spy()
   let people = [
          { firstName: 'Alan', lastName: 'Turing' },
          { firstName: 'Alanzo', lastName: 'Church' },
          { firstName: 'Grace', lastName: 'Hopper' }
                ]
   let person = { firstName: 'Alan', lastName: 'Turing' }
   let fname = {firstName: 'Alan'}
   let lname = {lastName: 'Turing'}

    beforeEach(() => {
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares)
        store = configureStore([
            thunk,
                ])();
        wrapper = shallow(
          <Provider store={store}>
            <EditPerson person={person} people={people} fname={fname} lname={lname} history={history} location={location}/>
          </Provider>)
    });

  it('renders correctly', function() {
        wrapper = shallow(
          <Provider store={store}>
            <EditPerson person={person} history={history} location={location}/>
          </Provider>)
  });

// Given that I am on the Person Edit page, I see the person's name I am editing displayed in the fields.

    it ('I see the person\'s name I am editing displayed in the fields', () => {
          const push = jest.fn();
          wrapper.setProps({ history: { push }, person });
          const first = wrapper.find('input').first();
          expect(first).toBeDefined();
          const second = wrapper.find('input').last();
          expect(second).toBeDefined();
    })

    it('Edit renders button', () => {
        const wrapper = shallow(<EditPerson store={store} person={person} />)
        const button = wrapper.find('button').at(0);
//        expect(button.text()).toEqual('Edit')
        expect(button).toBeDefined();
    });

    it('submit add event when click submit', () => {
      const callback = spy();
      const button = wrapper.find('edit').first();
      expect(button).toBeDefined()
//      button.simulate('click');
      expect(callback).toHaveBeenCalled;
    });

// 1. Given I am on the person edit page, when I change a persons name and click Save, then I am taken back to the list page.
    it('on click, changes the person\'s name and goes back to the list page', () => {
      const callback = spy();
      const wrapper = shallow(<EditPerson store={store} person={person} onSubmit={callback}  people={people} fname={fname} lname={lname}/>);
      const button = wrapper.find('edit').first();
//      button.simulate('click');
      expect(callback).toHaveBeenCalled;
      expect(history.push).toHaveBeenCalled;
      assert(location.pathname === '/')
    })

//1. Given that I am on the edit page, then I see a delete button.
    it('find delete button', () => {
      const wrapper = shallow(<EditPerson store={store} person={person} people={people} fname={fname} lname={lname} />)
      const button = wrapper.find('delete').last();
      expect(button).toBeDefined()
//      expect(button.text()).toEqual('Delete')
    });

//1. Given that I am on the edit page, when I click the delete button, then I am taken back to the list page.
    it('when I click the delete button, it goes back to the list page', () => {
      const callback = spy();
      const wrapper = shallow(<EditPerson store={store} person={person} people={people} fname={fname} lname={lname} onSubmit={callback} />);
      const button = wrapper.find('delete').last()
      expect(button).toBeDefined()
//      button.simulate('click');
      expect(callback).toHaveBeenCalled;
      expect(history.push).toHaveBeenCalled;
      assert(location.pathname === '/')
    })


})

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

    beforeEach(() => {
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares)
        store = configureStore([
            thunk,
                ])();
        wrapper = mount(
          <Provider store={store}>
            <EditPerson person={person} history={history} location={location}/>
          </Provider>)
    });

  it('renders correctly', function() {
        wrapper = mount(
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
//          console.log('first',wrapper.find('input').first().props().value)
//          console.log(wrapper.find('input').first().node.value)
//          console.log('last',wrapper.find('input').last().props().value)
//          console.log(wrapper.find('input').last().node.value)
    })

    it('Edit renders button', () => {
        const button = wrapper.find('button').first();
        expect(button.text()).toEqual('Edit')
        expect(button).toBeDefined();
    });

    it('Button click calls history.push', () => {
      const instance = wrapper.instance();
      const button = wrapper.find('button').first();
      const first = wrapper.find('input').first();
      first.simulate('change', { target: { value: 'james' } });
      const last = wrapper.find('input').last();
      last.simulate('change', { target: { value: 'a' } });
      button.simulate('click');
      expect(history.push).toHaveBeenCalled;
    });

    it('submit event when click submit', () => {
      const callback = spy();
      const button = wrapper.find('button').first();
      button.simulate('click');
      expect(callback).toHaveBeenCalled;
    });

// 1. Given I am on the person edit page, when I change a persons name and click Save, then I am taken back to the list page.
    it('on click, changes the person\'s name and goes back to the list page', () => {
      const callback = spy();
      const button = wrapper.find('button').first();
      button.simulate('click');
      expect(callback).toHaveBeenCalled;
      expect(history.push).toHaveBeenCalled;
      assert(location.pathname === '/')
    })

//1. Given that I am on the edit page, then I see a delete button.
    it('find event when click submit', () => {
      const callback = spy();
      const button = wrapper.find('button').last();
      expect(button.text()).toEqual('Delete')
    });

//1. Given that I am on the edit page, when I click the delete button, then I am taken back to the list page.
    it('when I click the delete button, it goes back to the list page', () => {
      const callback = spy();
      const button = wrapper.find('button').last();
      expect(button.text()).toEqual('Delete')
      button.simulate('click');
      expect(callback).toHaveBeenCalled;
      expect(history.push).toHaveBeenCalled;
      assert(location.pathname === '/')
    })


})

import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import App from '../App';
import MockRouter from 'react-mock-router';
import { Router, Route } from 'react-router-dom'
import {browserHistory} from 'react-router';
import { history } from '../utils/history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

describe("for the App", () => {

  let people = [
            { firstName: 'Alan', lastName: 'Turing' },
            { firstName: 'Alanzo', lastName: 'Church' },
            { firstName: 'Grace', lastName: 'Hopper' }
          ]
  let store
  let wrapper
  let peopleCount=3

  beforeEach(() => {
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares)
        const initialState = {}
        store = configureStore([
            thunk,
                ])();
        wrapper = mount(
          <Provider store={store}>
            <App />
          </Provider>)
  });

  it('renders correctly', function() {
        wrapper = mount(
          <Provider store={store}>
            <App />
          </Provider>)
  });

  it("confirms button", () => {
//  1. Given a browser, when I browse to the site, then I see an "Add Person" button.
        console.assert(location.pathname === '/')
        const node = wrapper.findWhere(n => n.type() === 'button' && n.contains('Add Person'))
//        console.log('node',node)
        expect(node.length).toEqual(1)
        expect(wrapper.find('button').text()).toEqual('Add Person');
  })

  it("calls componentWillMount", () => {
        let mockMount = jest.fn()
        const wrapper = mount(
          <Provider store={store}>
            <App fetch={mockMount}/>
          </Provider>)
        expect(mockMount.toHaveBeenCalled)
  })

  it('should call fetch when mounted', () => {
    let mockFetch = jest.fn()

    const wrapper = mount(
          <Provider store={store}>
            <App fetch={mockFetch}/>
          </Provider>)

    expect(wrapper).toBeDefined();
    expect(mockFetch.toHaveBeenCalled)
  });

  it('simulates click events', () => {
      spy(history, 'push');
      const wrapper = mount(
          <Provider store={store}>
            <App history={history}/>
          </Provider>)
      const onClick = wrapper.find('button').props().onClick;
      onClick();
      expect(history.push).toHaveBeenCalled;
  });

//2. Given I see the "Add Person" button, when I click it, then I am taken to an Add Person page.
  it("when I click the Add Person button, I go to the Add Person Page", () => {
        const push = jest.fn();
        const wrapper = mount(
          <Provider store={store}>
            <App history={history}/>
          </Provider>)
        wrapper.setProps({ history: { push } });
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenCalled;
        console.assert(location.pathname === '/addPerson')
  })

})

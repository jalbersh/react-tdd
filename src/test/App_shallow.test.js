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
        wrapper = shallow(
          <Provider store={store}>
            <App />
          </Provider>)
  });

  it('renders correctly', function() {
        wrapper = shallow(
          <Provider store={store}>
            <App />
          </Provider>)
        expect(wrapper).toBeDefined()
  });

  it("confirms button", () => {
//  1. Given a browser, when I browse to the site, then I see an "Add Person" button.
        console.assert(location.pathname === '/')
        wrapper = shallow(
          <Provider store={store}>
            <App />
          </Provider>)
        expect(wrapper.findWhere(n => n.type() === 'button' && n.contains('Add Person'))).toBeDefined;
  })

  it("calls componentWillMount", () => {
        let mockMount = jest.fn()
        const wrapper = shallow(
          <Provider store={store}>
            <App fetch={mockMount}/>
          </Provider>)
        expect(mockMount).toHaveBeenCalled
  })

    it('should call fetch when mounted', () => {
        let mockFetch = jest.fn()

        const wrapper = shallow(
              <Provider store={store}>
                <App fetch={mockFetch}/>
              </Provider>)
        expect(wrapper).toBeDefined();
        expect(mockFetch).toHaveBeenCalled
    });
})

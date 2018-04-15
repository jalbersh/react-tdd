import React from 'react';
import ReactDOM from 'react-dom';
import MockRouter from 'react-mock-router';
import { Router, Route } from 'react-router-dom'
import {browserHistory} from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import * as actions from '../actions/actions'
import * as types from '../utils/constants'
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import App from '../App';
import { Provider } from 'react-redux'
import { history } from '../utils/history';


describe('async actions', () => {
    let middlewares
    let mockStore
    let store
    let wrapper
    let people = [{ firstName: 'Alan', lastName: 'Turing' },{ firstName: 'Alanzo', lastName: 'Church' },{ firstName: 'Grace', lastName: 'Hopper' }]
    beforeEach(() => {
        middlewares = [thunk];
        mockStore = configureStore(middlewares)
        store = mockStore({ people: people })
//        store = configureStore([
//            thunk,
//                ])();
        wrapper = mount(
          <Provider store={store}>
            <App people={people}/>
          </Provider>)
    });
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

  it('dispatches ADD_PERSON_SUCCESS when fetching people has been done', () => {
    const person = {firstName: 'first', lastName: 'last'}

    const expectedActions = [
      { type: types.ADD_PERSON_SUCCESS, person: person, people: [] }
    ]

    return store.dispatch(actions.handleAdd(person)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
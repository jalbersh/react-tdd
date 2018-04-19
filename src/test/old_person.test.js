import React from 'react';
import ReactDOM from 'react-dom';
import MockRouter from 'react-mock-router';
import { Router, Route } from 'react-router-dom'
import {browserHistory} from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import reducer from '../reducers/old_person'
import * as types from '../utils/constants'
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import App from '../App';
import { Provider } from 'react-redux'

// Given that I have added a person, when I am on the list page, then I see my people.
describe("reducer: old_person Reducer", () => {
    describe("on SET_OLD_PERSON", () => {
        it("should add a person to the people", () => {
            // create the initial state object
            let person = { firstName: 'Alan', lastName: 'Turing' }
            let initialState = person
            let payload={person: person};
            reducer(person, {type: types.SET_OLD_PERSON,person: person})
        });
    });
});
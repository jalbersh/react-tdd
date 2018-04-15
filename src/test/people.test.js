import React from 'react';
import ReactDOM from 'react-dom';
import MockRouter from 'react-mock-router';
import { Router, Route } from 'react-router-dom'
import {browserHistory} from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
//import * as reducers from '../reducers'
import reducer from '../reducers/people'
import * as types from '../utils/constants'
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import App from '../App';
import { Provider } from 'react-redux'

// Given that I have added a person, when I am on the list page, then I see my people.
describe("reducer: people Reducer", () => {
    describe("on ADD_PERSON_SUCCESS", () => {
        it("should add a person to the people", () => {
            // create the initial state object
            let people = [
                          { firstName: 'Alan', lastName: 'Turing' },
                          { firstName: 'Alanzo', lastName: 'Church' },
                          { firstName: 'Grace', lastName: 'Hopper' }
                         ]
            expect(people.length).toBe(3);
            let initialState = {people: people}
            const person = {firstName: 'first', lastName: 'last'}

            let payload={person: person, people: people};
            reducer([
                                        { firstName: 'Alan', lastName: 'Turing' },
                                        { firstName: 'Alanzo', lastName: 'Church' },
                                        { firstName: 'Grace', lastName: 'Hopper' }
                                       ], {
                                        type: types.ADD_PERSON_SUCCESS,
                                        person: person,
                                        people: people
              })
            expect(people.length).toBe(4);
        });
    });
});
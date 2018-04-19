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
    describe("on GET_PEOPLE", () => {
        it("should get the people", () => {
            // create the initial state object
            let people = [
                          { firstName: 'Alan', lastName: 'Turing' },
                          { firstName: 'Alanzo', lastName: 'Church' },
                          { firstName: 'Grace', lastName: 'Hopper' }
                         ]
            expect(people.length).toBe(3);
            let initialState = {people: people}
            const person = {firstName: 'first', lastName: 'last'}

            reducer(people,{
                         type: types.GET_PEOPLE,
                         people: people
            })
            expect(people.length).toBe(3);
        });
    });
    describe("on EDIT_PERSON_SUCCESS", () => {
        it("should edit a person to the people", () => {
            // create the initial state object
            let people = [
                          { firstName: 'Alan', lastName: 'Turing' },
                          { firstName: 'Alanzo', lastName: 'Church' },
                          { firstName: 'Grace', lastName: 'Hopper' }
                         ]
            let new_people = [
                          { firstName: 'Alan', lastName: 'Turing' },
                          { firstName: 'Alanzo', lastName: 'Church' },
                          { firstName: 'Grace1', lastName: 'Hopper2' }
                         ]
            expect(people.length).toBe(3);
            const new_person = { firstName: 'Grace1', lastName: 'Hopper2' }
            const old_person = { firstName: 'Grace', lastName: 'Hopper' }
            expect(reducer(people,{
                        type: types.EDIT_PERSON_SUCCESS,
                        person: new_person,
                        old_name: old_person,
                        people: people
                    })).toEqual(new_people)
        });
    });
//1. Given that I have deleted a person, then I no longer see the deleted people.
    describe("on DELETE_PERSON_SUCCESS", () => {
        it("should delete a person from the people", () => {
            // create the initial state object
            let people = [
                          { firstName: 'Alan', lastName: 'Turing' },
                          { firstName: 'Alanzo', lastName: 'Church' },
                          { firstName: 'Grace', lastName: 'Hopper' }
                         ]
            let new_people = [
                        { firstName: 'Alan', lastName: 'Turing' },
                        { firstName: 'Alanzo', lastName: 'Church' }
                        ]
            expect(people.length).toBe(3);
            const person = { firstName: 'Grace', lastName: 'Hopper' }
//            let new_people = []
            expect(reducer(people,{
                        type: types.DELETE_PERSON_SUCCESS,
                        person,
                        people
                    })).toEqual(new_people)
        });
    });
});
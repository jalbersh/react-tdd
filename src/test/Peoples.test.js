import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import Peoples from '../components/Peoples';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockRouter from 'react-mock-router';
import { Router, Route } from 'react-router-dom'
import {browserHistory} from 'react-router';
import { history } from '../utils/history';

describe("for the People component", () => {
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
            <Peoples people={people} person={person} onClick={mockHandle} history={history} location={location}/>
          </Provider>)
    });

  it('renders correctly', function() {
        wrapper = mount(
          <Provider store={store}>
            <Peoples people={people} onClick={mockHandle} history={history} location={location}/>
          </Provider>)
  });

// Given that I see people in the list, when I click a person, I am taken to a Person Edit page.

    it('clicking a people row calls rowClick', () => {
          expect(wrapper).toBeDefined
          const table = wrapper.find('tbody')
          const rows = table.find('tr');
          expect(rows.length).toEqual(3);
          const row = rows.get(0)
          expect(row).toBeDefined
          rows.first().simulate('click')
          expect(mockHandle.toHaveBeenCalled)
    });

    it('clicking a people row calls history.push', () => {
          spy(history, 'push');
          const table = wrapper.find('tbody')
          const rows = table.find('tr');
          const row = rows.get(0)
          rows.first().simulate('click')
          expect(history.push).toHaveBeenCalled;
    });

    it ('clicking a people row goes to Person Edit page', () => {
          const push = jest.fn();
          wrapper.setProps({ history: { push } });
          const table = wrapper.find('tbody')
          const rows = table.find('tr');
          const row = rows.get(0)
          rows.first().simulate('click')
          expect(history.push).toHaveBeenCalled;
          console.log('location',location.pathname)
          console.assert(location.pathname === '/editPerson')
    })

})

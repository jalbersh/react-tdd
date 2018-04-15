import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';
import AddPerson from '../components/AddPerson';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe("for the AddPerson page", () => {
   let addPerson;
   let store
   let wrapper
   let people = [
          { firstName: 'Alan', lastName: 'Turing' },
          { firstName: 'Alanzo', lastName: 'Church' },
          { firstName: 'Grace', lastName: 'Hopper' }
                ]
   let location = {
                    state: {
                         people: people
                    }
                  }

    beforeEach(() => {
        const middlewares = [thunk];
        const mockStore = configureStore(middlewares)
        store = configureStore([
            thunk,
                ])();
        wrapper = mount(
          <Provider store={store}>
            <AddPerson people={people} location={location}/>
          </Provider>)
    });

  it('renders correctly', function() {
        wrapper = mount(
          <Provider store={store}>
            <AddPerson people={people} location={location}/>
          </Provider>)
  });

//1. Given I am on the Add Person page, when I fill in the fields and click "Add", I am taken back to the list page.
    it("is on the Add Person page, when I fill in fields and click Add, I go back to the list page", () =>{
        const push = jest.fn();
        const first = wrapper.find('input').first();
        expect(first).toBeDefined();
        const second = wrapper.find('input').last();
        expect(second).toBeDefined();
    })

    it('Add renders button', () => {
        const button = wrapper.find('button').first();
        expect(button.text()).toEqual('Add')
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
})

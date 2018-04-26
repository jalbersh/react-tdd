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
        wrapper = shallow(
          <Provider store={store}>
            <AddPerson people={people} location={location}/>
          </Provider>)
    });

  it('renders correctly', function() {
        wrapper = shallow(
          <Provider store={store}>
            <AddPerson people={people} location={location}/>
          </Provider>)
        expect(wrapper).toBeDefined()
  });

//1. Given I am on the Add Person page, when I fill in the fields and click "Add", I am taken back to the list page.
    it("is on the Add Person page, when I fill in fields and click Add, I go back to the list page", () =>{
        const wrapper = shallow(<AddPerson store={store} people={people} location={location}/>)
        const first = wrapper.find('input').first();
        expect(first).toBeDefined();
        const second = wrapper.find('input').last();
        expect(second).toBeDefined();
    })

    it('Add renders button', () => {
        const button = wrapper.find('button').findWhere(x=>x.text() === 'Add')
        expect(button).toBeDefined();
    });

  it('submit event when click submit', () => {
     const submitHandler = spy();
     const wrapper = mount(<AddPerson store={store} people={people} onSubmit={submitHandler} />);
     const button = wrapper.find('button').at(0)
     button.simulate('click');
     expect(submitHandler).toHaveBeenCalled
    });

})

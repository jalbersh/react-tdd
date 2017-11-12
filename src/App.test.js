import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import PersonList from './PersonList';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    const personList = app.find(PersonList.name);
    expect(personList).toHaveLength(1);
  })
  
  it('has state', () => {
    const app = shallow(<App />);
    expect(app.state().people).toHaveLength(3);
  })

  it('passes people state', () => {
    const app = shallow(<App />);
    const personList = app.find(PersonList.name);
    expect(personList.props().people).toHaveLength(3);
  });
})

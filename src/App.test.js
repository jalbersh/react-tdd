import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import PersonList from './PersonList';

describe('App', () => {
  it('renders without crashing', () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList.name);
    expect(personList).toHaveLength(1);
  });
  
  it('has state', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state().people).toHaveLength(3);
  });

  it('passes people state', () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList.name);
    expect(personList.props().people).toHaveLength(3);
  });
});

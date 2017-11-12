import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PersonList from './PersonList';

describe('PersonList', () => {
    it('should render people', () => {
        const expected = [
            { firstName: 'Alan', lastName: 'Turing' },
            { firstName: 'Alanzo', lastName: 'Church' }
        ];
        const personList = shallow(<PersonList people={expected} />);
        const actual = personList.find('li');
        expect(actual).toHaveLength(2);
    });

    it('has clickable people', () => {
        const expected = [
            { firstName: 'Alan', lastName: 'Turing' },
            { firstName: 'Alanzo', lastName: 'Church' }
        ];
        const personList = shallow(<PersonList people={expected} />);
        expect(personList.find('a')).toHaveLength(2);
    })

    it('calls onEdit when clicked', () => {
        const expected = [
            { firstName: 'Alan', lastName: 'Turing' },
        ];
        const onEdit = sinon.stub();
        const personList = shallow(<PersonList 
            people={expected} onEdit={onEdit} />);
        expect(personList.find('a')).toHaveLength(1);
        personList.find('a').simulate('click');
        expect(onEdit.calledOnce).toBe(true);
    })
});

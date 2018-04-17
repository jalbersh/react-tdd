// in src/reducers/person.js
import {
        ADD_PERSON_STARTED,
        ADD_PERSON_SUCCESS,
        SET_PERSON
        } from '../utils/constants'

const initialState = {
  all: {},
}

export default (state = initialState, action) => {
//  console.log('in Reducers.person with type',action ? action.type : 'no action',' and state',action)
  if (!action) {
        console.log('No action, returning default state')
        return state
  }
  switch (action.type) {
        case ADD_PERSON_STARTED:
//            console.log('ADD_PERSON_STARTED(person)',action)
            return state
        case ADD_PERSON_SUCCESS:
//            console.log('ADD_PERSON_SUCCESS(person)',action)
            return action.person
        case SET_PERSON:
//            console.log('SET_PERSON(person)',action)
            const person = action.person
            if (person) {
                return person
            }
            return state
        default:
            return state
  }
}

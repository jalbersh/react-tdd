// in src/reducers/people.js
import {
    ADD_PERSON_STARTED,
    ADD_PERSON_SUCCESS,
    GET_PEOPLE
        } from '../utils/constants'

const initialState = []

export default function reducer(state = initialState, action) {
//export default (state = initialState, action) => {
//  console.log('in Reducers.people with type',action ? action.type : 'no action',' and state',action)
  if (!action) {
        console.log('No action, returning default state')
        return state
  }
  switch (action.type) {
        case ADD_PERSON_STARTED:
//            console.log('ADD_PERSON_STARTED(people)',action)
            return state
        case ADD_PERSON_SUCCESS:
//            console.log('ADD_PERSON_SUCCESS(people)',action)
              return action.people.push(action.person)
        case GET_PEOPLE:
//            console.log('GET_PEOPLE',action)
            return action.people
        default:
            return state
  }
}

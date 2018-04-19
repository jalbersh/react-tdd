// in src/reducers/person.js
import {
        SET_OLD_PERSON
        } from '../utils/constants'

const initialState = {}

export default (state = initialState, action) => {
//  console.log('in Reducers.person with type',action ? action.type : 'no action',' and state',action)
  if (!action) {
        console.log('No action, returning default state')
        return state
  }
  switch (action.type) {
        case SET_OLD_PERSON:
//            console.log('SET_OLD_PERSON(person)',action)
            const person = action.person
            if (person) {
                return person
            }
            return state
        default:
            return state
  }
}

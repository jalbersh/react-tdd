// in src/reducers/people.js
import {
    ADD_PERSON_STARTED,
    ADD_PERSON_SUCCESS,
    DELETE_PERSON_SUCCESS,
    EDIT_PERSON_SUCCESS,
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
              let people = action.people
              people.push(action.person)
//              console.log('ADD_PERSON_SUCCESS(people),returning',people)
              return people
        case GET_PEOPLE:
//            console.log('GET_PEOPLE',action)
            return action.people
//        dispatch({type: EDIT_PERSON_SUCCESS, person: name, old_name: person, people: state.people})
        case EDIT_PERSON_SUCCESS:
                       let curPeople = action.people
//                       console.log('looking for',action.old_name,'replacing with',action.person)
                       let personToFind = curPeople.find((per) => {
                           return (per.firstName === action.old_name.firstName && per.lastName === action.old_name.lastName)
                       })
                       let newPeople = []
//                       console.log('personToFind',personToFind)
                       if (personToFind) {
                           let personIndex = curPeople.indexOf(personToFind)
//                           console.log('personIndex',personIndex)
                           newPeople = [
                                ...curPeople.slice(0, personIndex),
                                action.person,
                                ...curPeople.slice(personIndex + 1)
                           ]
                       } else {
                           newPeople = [
                                ...curPeople, action.person
                           ]
                       }
                       return newPeople
        case DELETE_PERSON_SUCCESS:
                       let person = action.person
//                       console.log('DELETE_PERSON_SUCCESS, person',person)
                       const currPeople = state
//                       console.log('DELETE_PERSON_SUCCESS, people',people)
                       if (currPeople && currPeople.length>0) {
                           let newPeople = []
                           let personToFind = currPeople.find((per) => {
                               return (per.firstName === person.firstName && per.lastName === person.lastName)
                           })
                           let perIndex = personToFind ? currPeople.indexOf(personToFind) : -1
//                           console.log('perIndex',perIndex)
                           if (perIndex !== -1) {
                              newPeople = [
                                 ...currPeople.slice(0, perIndex),
                                 ...currPeople.slice(perIndex + 1)
                              ]
                              return newPeople
                           }
                           return currPeople
                       }
                       return state
        default:
            return state
  }
}


 import store from '../utils/store';
 import {
//        ADD_PERSON_STARTED,
        ADD_PERSON_SUCCESS,
//        EDIT_PERSON_STARTED,
        EDIT_PERSON_SUCCESS
        } from '../utils/constants'

 export function handleAdd(name) {
//    console.log('in action.handleAdd',name,store.getState())
    return async (dispatch) => {
//        console.log('dispatching ADD_PERSON_STARTED with',name,store.getState().people)
        dispatch({type: ADD_PERSON_SUCCESS, person: name, people: store.getState().people})
    }
 }

 export function handleEdit(name) {
//    console.log('in action.handleEdit',name,store.getState())
    return async (dispatch) => {
//        console.log('dispatching EDIT_PERSON_STARTED with',name,store.getState().people)
        dispatch({type: EDIT_PERSON_SUCCESS, person: name, people: store.getState().people})
    }
 }


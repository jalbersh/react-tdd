//import person from './person';
import people from './people';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
//    person,
    people,
    form: formReducer
});
export default rootReducer;

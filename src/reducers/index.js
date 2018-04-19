import person from './person';
import people from './people';
import old_person from './old_person';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    person,
    people,
    old_person,
    form: formReducer
});
export default rootReducer;

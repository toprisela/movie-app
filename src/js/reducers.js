import { combineReducers } from 'redux';

//reducers 
import messageReducer from './components/messages/reducers/messageReducer';
import loginReducer from './components/login/reducers/loginReducer';

export default combineReducers({
    messageReducer,
    loginReducer
});
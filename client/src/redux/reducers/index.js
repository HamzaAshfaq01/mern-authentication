import { combineReducers } from 'redux';
import authReducer from './auth/auth_reducer';
import msgReducer from './message/msg_reducer';
import loadingrReducer from './loading/loading_reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	message: msgReducer,
	loading: loadingrReducer,
});

export default rootReducer;

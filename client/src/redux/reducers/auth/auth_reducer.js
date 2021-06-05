import jwt_decode from 'jwt-decode';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	RESET_SUCCESS,
	RESET_FAIL,
} from '../../constants/auth_constants.js';

const initialState = {
	access: null,
	loading: false,
	isAuthenticated: false,
	isReset: false,
	user: null,
};

const verifyToken = (token) => {
	const decodeToken = jwt_decode(token);
	const expiresIn = new Date(decodeToken.exp * 1000);
	if (new Date() > expiresIn) {
		localStorage.removeItem('access');
		return null;
	} else {
		return decodeToken;
	}
};
const token = localStorage.getItem('access');
if (token) {
	const decoded = verifyToken(token);
	if (decoded) {
		initialState.access = token;
		const { user } = decoded;
		initialState.user = user;
	}
}

const AuthReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem('access', payload.token);
			const decoded = verifyToken(payload.token);
			const { user } = decoded;
			return {
				...state,
				isAuthenticated: true,
				access: payload.token,
				user,
			};
		case RESET_SUCCESS:
			return {
				...state,
				isReset: payload,
			};

		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT_SUCCESS:
			localStorage.removeItem('access');
			return {
				...state,
				isAuthenticated: false,
				user: null,
				access: null,
			};
		case RESET_FAIL:
			return {
				...state,
				isReset: payload,
			};

		default:
			return state;
	}
};

export default AuthReducer;

import axios from '../../../utils/axios';
import { returnMessage } from '../message/message_action';
import { setLoading, clearLoading } from '../loading/loading_action';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	RESET_SUCCESS,
	RESET_FAIL,
} from '../../constants/auth_constants.js';

// REGIGSTER ACTION
export const register = (body) => async (dispatch) => {
	try {
		dispatch(setLoading(true));

		const { data } = await axios.post('/api/auth/register', body);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: data,
		});
		dispatch(clearLoading(false));
		dispatch(returnMessage(data.message));
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { message },
				},
			} = err;
			dispatch(returnMessage(message));
		} else {
			dispatch(returnMessage(err.message));
		}

		dispatch(clearLoading(false));
		dispatch({
			type: REGISTER_FAIL,
		});
	}
};

// LOGIN ACTION
export const login = (body) => async (dispatch) => {
	try {
		dispatch(setLoading(true));

		const { data } = await axios.post('/api/auth/login', body);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: data,
		});

		dispatch(clearLoading(false));
		dispatch(returnMessage(data.message));
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { message },
				},
			} = err;
			dispatch(returnMessage(message));
		} else {
			dispatch(returnMessage(err.message));
		}

		dispatch(clearLoading(false));
		dispatch({
			type: LOGIN_FAIL,
		});
	}
};

// FORGOT PASSWORD ACTION
export const forgotpassword = (email) => async (dispatch) => {
	try {
		dispatch(setLoading());

		const { data } = await axios.post('/api/auth/forgotpassword', { email });

		dispatch(clearLoading());
		dispatch(returnMessage(data.message));
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { message },
				},
			} = err;
			dispatch(returnMessage(message));
		} else {
			dispatch(returnMessage(err.message));
		}
		dispatch(clearLoading(false));
	}
};

// RESET PASSWORD ACTION
export const resetpassword = (password, resetToken) => async (dispatch) => {
	try {
		dispatch(setLoading());

		const { data } = await axios.put(`/api/auth/resetpassword/${resetToken}`, {
			password,
		});

		dispatch({
			type: RESET_SUCCESS,
			payload: true,
		});
		dispatch(clearLoading());
		dispatch(returnMessage(data.message));
	} catch (err) {
		dispatch({
			type: RESET_FAIL,
			payload: false,
		});
		if (err.response) {
			const {
				response: {
					data: { message },
				},
			} = err;
			dispatch(returnMessage(message));
		} else {
			dispatch(returnMessage(err.message));
		}
		dispatch(clearLoading(false));
	}
};

// LOGOUT ACTION
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS,
	};
};

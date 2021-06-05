import { GET_MSG, CLEAR_MSG } from '../../constants/msg_constants';

// RETURN ERRORS
export const returnMessage = (message) => {
	return {
		type: GET_MSG,
		payload: message,
	};
};

// CLEAR ERRORS
export const clearMessage = () => {
	return {
		type: CLEAR_MSG,
	};
};

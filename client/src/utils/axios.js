import axios from 'axios';
const instance = axios.create({
	baseURL: 'https://mernstack-authentication.herokuapp.com/',
	headers: { 'Content-type': 'application/json' },
});

export default instance;

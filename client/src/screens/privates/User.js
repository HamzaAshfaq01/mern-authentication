import React from 'react';
import { useSelector } from 'react-redux';

function User() {
	const globalState = useSelector((state) => state);
	const {
		auth: { user },
	} = globalState;

	return (
		<div>
			<h1>{user.username}</h1>
		</div>
	);
}

export default User;

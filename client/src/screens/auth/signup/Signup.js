import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/loader/Loading';
import { register } from '../../../redux/actions/auth/auth_action';
import { returnMessage } from '../../../redux/actions/message/message_action';

function Signup({ history }) {
	const dispatch = useDispatch();

	const globalState = useSelector((state) => state);
	const {
		auth: { isAuthenticated },
	} = globalState;
	const {
		loading: { loader },
	} = globalState;

	const [registerData, setRegisterData] = useState({
		username: '',
		email: '',
		password: '',
		confirmpassword: '',
	});
	const handleChange = (e) =>
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();

		if (registerData['password'] !== registerData['confirmpassword']) {
			return dispatch(returnMessage("Passwords don't match"));
		}
		dispatch(register(registerData));
	};

	useEffect(() => {
		if (isAuthenticated) {
			history.replace('/');
		}
	}, [history, isAuthenticated]);

	return (
		<div className='form_wrapper '>
			<form onSubmit={handleSubmit} className='form'>
				<h2 className='card-title'>Register.</h2>
				<div className='input-groups'>
					<input
						placeholder='Enter Your Name'
						className='form_input'
						type='text'
						name='username'
						onChange={handleChange}
					/>
					<input
						placeholder='Enter Your Email Address'
						className='form_input'
						type='email'
						name='email'
						onChange={handleChange}
					/>
					<input
						placeholder='Enter Your Password'
						className='form_input'
						type='password'
						name='password'
						onChange={handleChange}
					/>
					<input
						placeholder='Confirm Your Password'
						className='form_input'
						type='password'
						name='confirmpassword'
						onChange={handleChange}
					/>
				</div>
				<div className='btn-grp'>
					<Link type='submit' to='/login'>
						Login
					</Link>
					<button className='button button-primary'>
						{loader ? <Loader /> : 'Create Account'}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Signup;

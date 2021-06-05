import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/loader/Loading';
import { login } from '../../../redux/actions/auth/auth_action';

function Signin({ history }) {
	const dispatch = useDispatch();
	const globalState = useSelector((state) => state);
	const {
		auth: { isAuthenticated },
	} = globalState;
	const {
		loading: { loader },
	} = globalState;

	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});
	const handleChange = (e) =>
		setLoginData({ ...loginData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(loginData));
	};

	useEffect(() => {
		if (isAuthenticated) {
			history.replace('/');
		}
	}, [history, isAuthenticated]);

	return (
		<div className='form_wrapper'>
			<form className='form' onSubmit={handleSubmit}>
				<h2 className='card-title'>Login.</h2>
				<div className='input-groups'>
					<input
						placeholder='Enter Your Email Address'
						className='form_input'
						name='email'
						type='email'
						onChange={handleChange}
					/>
					<input
						placeholder='Enter Your Password'
						className='form_input'
						name='password'
						type='password'
						onChange={handleChange}
					/>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Link to='/forgotpassword'>Forgot Password?</Link>
					</div>
				</div>
				<div className='btn-grp'>
					<Link to='/register'>Create Account</Link>
					<button type='submit' className='button button-primary'>
						{loader ? <Loader /> : 'Login'}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Signin;

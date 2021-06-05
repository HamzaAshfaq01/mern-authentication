import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/loader/Loading';
import { forgotpassword } from '../../../redux/actions/auth/auth_action';

const ForgotPasswordScreen = () => {
	const dispatch = useDispatch();
	const globalState = useSelector((state) => state);
	const {
		loading: { loader },
	} = globalState;

	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(forgotpassword(email));
	};

	return (
		<div className='form_wrapper'>
			<form className='form' onSubmit={handleSubmit}>
				<h2 className='card-title'>Forgot Password.</h2>
				<div className='input-groups'>
					<p className='forgotpassword-screen__subtext'>
						Please enter the email address you register your account
						with. We will send you reset password confirmation to this
						email
					</p>
					<input
						placeholder='Enter Your Email Address'
						className='form_input'
						name='email'
						type='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='btn-grp'>
					<Link to='/register'>Create Account</Link>
					<button type='submit' className='button button-primary'>
						{loader ? <Loader /> : 'Forgot'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ForgotPasswordScreen;

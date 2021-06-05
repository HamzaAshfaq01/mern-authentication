import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/loader/Loading';
import { resetpassword } from '../../../redux/actions/auth/auth_action';
import { returnMessage } from '../../../redux/actions/message/message_action';

const ForgotPasswordScreen = ({ match, history }) => {
	const dispatch = useDispatch();
	const globalState = useSelector((state) => state);
	const {
		auth: { isReset },
	} = globalState;
	const {
		loading: { loader },
	} = globalState;

	const [resetPasswordData, setResetPasswordData] = useState({
		password: '',
		confirmpassword: '',
	});

	const handleChange = (e) =>
		setResetPasswordData({
			...resetPasswordData,
			[e.target.name]: e.target.value,
		});

	const handleSubmit = (e) => {
		e.preventDefault();
		const resetToken = match.params.resetToken;
		if (resetPasswordData['password'] !== resetPasswordData['confirmpassword']) {
			return dispatch(returnMessage("Passwords don't match"));
		}
		dispatch(resetpassword(resetPasswordData['password'], resetToken));
	};

	useEffect(() => {
		if (isReset) {
			history.replace('/login');
		}
	}, [history, isReset]);

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
						placeholder='Enter Your Password'
						className='form_input'
						name='password'
						type='password'
						onChange={handleChange}
					/>
					<input
						placeholder='Confirm Your Password'
						className='form_input'
						name='confirmpassword'
						type='password'
						onChange={handleChange}
					/>
				</div>
				<div className='btn-grp'>
					<Link to='/register'>Create Account</Link>
					<button type='submit' className='button button-primary'>
						{loader ? <Loader /> : 'Reset'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ForgotPasswordScreen;

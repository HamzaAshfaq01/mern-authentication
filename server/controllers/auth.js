const crypto = require('crypto');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res, next) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		return res.status(401).json({
			message: 'Please fill all fields',
		});
	}
	try {
		const user = await User.create({
			username,
			email,
			password,
		});
		const token = user.getSignedToken();
		res.status(200).json({
			message: 'Your account has been created',
			token,
		});
	} catch (error) {
		res.status(400).json({ message: 'Registration failed' });
	}
};
exports.login = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(401).json({
			message: 'Please fill all fileds',
		});
	}
	try {
		const user = await User.findOne({ email }).select('+password');
		if (!user)
			return res.status(404).json({
				message: 'User not found',
			});

		const isMatched = await user.matchPassword(password);
		if (!isMatched)
			return res.status(401).json({
				message: 'Password is not correct',
			});

		const token = user.getSignedToken();
		res.status(200).json({
			token,
			message: 'Login Successful',
		});
	} catch (error) {
		res.status(400).json({ message: 'Login failed' });
	}
};

exports.forgotpassword = async (req, res, next) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user)
			return res.status(401).json({
				message: 'Email could not be sent',
			});

		const resetToken = user.getResetPasswordToken();

		await user.save();
		const resetUrl = `https://mern-authentication.netlify.app/passwordreset/${resetToken}`;
		const message = `
       <h1>You have requested a password reset</h1>
       <p>Please go to this link to reset your password</p>
       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
       `;
		try {
			await sendEmail({
				to: user.email,
				subject: 'Password Reset Request',
				text: message,
			});

			return res.status(200).json({ message: 'Email Sent' });
		} catch (err) {
			user.resetPasswordToken = undefined;
			user.resetPasswordExpire = undefined;

			await user.save();

			return res.status(401).json({
				message: 'Email could not be sent',
			});
		}
	} catch (error) {
		return res.status(401).json({
			message: error.message,
		});
	}
};

exports.resetPassword = async (req, res, next) => {
	const resetPasswordToken = crypto
		.createHash('sha256')
		.update(req.params.resetToken)
		.digest('hex');

	try {
		const user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpire: { $gt: Date.now() },
		});
		if (!user) {
			return res.status(401).json({
				message: 'Invalid token',
			});
		}

		user.password = req.body.password;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;

		await user.save();

		res.status(201).json({
			message: 'Password Updated Success',
		});
	} catch (err) {
		return res.status(401).json({
			message: err.message,
		});
	}
};

exports.sendToken = (user, statusCode, res) => {
	const token = user.getSignedToken();
};

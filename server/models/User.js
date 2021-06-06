const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Username field is empty'],
	},
	email: {
		type: String,
		required: [true, 'Email field is empty'],
		unique: true,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please provide a valid email',
		],
	},
	password: {
		type: String,
		required: [true, 'Password field is empty'],
		minlength: [6, 'Password must be 6 characters long'],
		select: false,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
});

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};
userSchema.methods.getSignedToken = function () {
	payload = {
		user: {
			id: this._id,
			email: this.email,
			username: this.username,
		},
	};
	return jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES,
	});
};
userSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString('hex');
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');
	this.resetPasswordExpire = Date.now() + 900000;

	return resetToken;
};

const User = mongoose.model('user', userSchema);

module.exports = User;

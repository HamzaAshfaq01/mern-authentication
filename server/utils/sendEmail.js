const nodemailer = require('nodemailer');

const SendMail = (options) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'hamzafake7866@gmail.com',
			pass: 'hamzafake',
		},
	});
	const mailOptions = {
		from: process.env.YOUR_MAIL,
		to: options.to,
		subjects: options.subject,
		html: options.text,
	};
	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log(err, 'err');
		} else {
			console.log(info, 'info');
		}
	});
};

module.exports = SendMail;

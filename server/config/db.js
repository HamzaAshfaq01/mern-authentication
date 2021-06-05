const mongosse = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongosse.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log(
			`DB connected on host ${conn.connection.host}`.brightBlue.underline
		);
	} catch (err) {
		console.log(`Logged Error ${err}`);
	}
};

module.exports = connectDB;

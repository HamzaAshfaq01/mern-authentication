require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const connectDB = require('./config/db');

connectDB();
app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
	res.send('Api running');
});

// Connecting Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'PRODUCTION') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
	console.log(`Sever running on port ${PORT}`.brightYellow)
);

process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged Error: ${err.message}`);
	server.close(() => process.exit(1));
});

exports.getPrivateRoute = (req, res, next) => {
	res.status(200).json({
		user: req.user,
	});
};

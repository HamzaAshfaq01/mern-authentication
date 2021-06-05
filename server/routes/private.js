const express = require('express');
const router = express.Router();
const { getPrivateRoute } = require('../controllers/private');
const { protect } = require('../middlewares/auth');

router.route('/').get(protect, getPrivateRoute);

module.exports = router;

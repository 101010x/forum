const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 15).then((hash) => {
		const user = new User({
			email: req.body.email,
			password: hash
		});
		user.save().then(() => {
			res.status(201).json({
				message: 'User created'
			});
		}).catch((error) => {
			res.status(500).json({
				error: error
			});
		});
	}).catch((error) => {
        error: error
    })
};

exports.login = (req, res, next) => {
	User.findOne({ email: req.body.email }).then((user) => {
		if (!user) {
			return res.status(401).json({
				error: new Error('User Does not exist')
			});
		}
		bcrypt.compare(req.body.password, user.password).then((valid) => {
			if (!valid) {
				return res.status(401).json({
					error: new Error('Credentials not valid')
				});
			}
			const token = jwt.sign(
				{ userId: user._id },
				process.env.TOKEN_SECRET,
				{ expiresIn: '24h' });
			res.status(200).json({
				userId: user._id,
				token: token
			});
		}).catch((error) => {
			res.status(500).json({
				error: error
			});
		});
	}).catch((error) => {
		res.status(500).json({
			error: error
		});
	});
};

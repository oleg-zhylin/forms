const jwt = require('jsonwebtoken');
const config = require('config');
const _ = require('lodash');
const User = require('../db/models/user');

module.exports = async (req, res, next) => {
    class UnauthError extends Error {
        constructor(msg) {
            super(msg);
        }
    }

    let token = _.split(req.headers.authorization, ' ')[1] || req.query.access_token;
    if (!token || token === '') {
        return next(new Error('no_token_provided'));
    } else {
        try {
            let decoded = jwt.verify(token, config.get('jvt_secret'));
            try {
                req.user = await new User({id: decoded.id}).fetch({require: true});
            }
            catch (err) {
                throw new UnauthError('unauthorized');
            }
            next();
        } catch (err) {
            if (!(err instanceof UnauthError)) {
                err = new Error('invalid_token');
            }
            next(err);
        }
    }
}
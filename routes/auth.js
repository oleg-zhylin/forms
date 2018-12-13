const express = require('express');
const Joi = require('joi');
const router = express.Router();
const User = require('../db/models/user');
const cryptPassword = require('../helpers/crypt-password');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/sign-in', function (req, res, next){
    const schema = {
        password: Joi.string().min(6).max(60).required(),
        login: Joi.string().min(5).max(80).required()
    };
    Joi.validate(
        req.body,
        schema,
        (err, value)=>{
            if(err != null) {
                return next(err);
            }
            return next();
        }
    );

}, async function(req, res, next) {
    let userPointer = new User({
        login: req.body.login,
        password: cryptPassword(req.body.password,  config.get('salt'))
    });
    try {
        let user = await userPointer.fetch({
            require: true
        });
        var token = jwt.sign(user.toJSON(),  config.get('jvt_secret'));
        res.json({token});
    }catch (e) {
        return next(e);
    }
});

module.exports = router;
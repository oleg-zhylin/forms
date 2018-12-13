const cryptPassword = require('../../helpers/crypt-password');
const config = require('config');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {login: 'admin', password: cryptPassword ('super_admin', config.get('salt'))},
      ]);
    });
};

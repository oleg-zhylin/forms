const Bookshelf = require('../../config/db');

module.exports = Bookshelf.model('User', Bookshelf.Model.extend(
    {
        tableName: 'users',
        hidden: ['password', 'token']
    }));
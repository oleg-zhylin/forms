const Bookshelf = require('../../config/db');

module.exports = Bookshelf.model('Form', Bookshelf.Model.extend(
    {
        tableName: 'forms'
    }));
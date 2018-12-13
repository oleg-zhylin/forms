let express = require('express');
let router = express.Router();
const Form = require('../db/models/form');

router.get('/', async function(req, res, next) {
    let form = new Form();
    try {
        form = await form.fetchPage({
            pageSize:       req.query.pageSize,
            page:           req.query.page
        });
        return res.json(form);
    }catch (e) {
        return next(e);
    }
});

router.get('/:id', async function(req, res, next) {
    try{
        let form = new Form({id:req.params.id});
        form = await form.fetch({
            require: true
        });
        return res.json(form);
    }catch (e) {
        return next(e);
    }
});

module.exports = router;
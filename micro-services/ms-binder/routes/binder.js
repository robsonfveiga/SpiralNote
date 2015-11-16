var express = require('express');
var router = express.Router();
var binderAction = requireRoot('/actions/binder');

router.get('/getAll/:login', binderAction.getAll);
router.get('/getById/:id', binderAction.getById);

module.exports = router;

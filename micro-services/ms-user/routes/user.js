var express = require('express');
var router = express.Router();
var userAction = requireRoot('/actions/user');

router.get('/', userAction.get);
router.post('/', userAction.insert);
router.put('/:id', userAction.update);
router.delete('/:id', userAction.remove);

module.exports = router;

var express = require('express');
var router = express.Router();
var userAction = requireRoot('/actions/user');

router.get('/getAll', userAction.getAll);
router.post('/insert', userAction.insert);
router.put('/update/:id', userAction.update);
router.delete('/remove/:id', userAction.remove);

module.exports = router;

var express = require('express');
var router = express.Router();
var markerAction = requireRoot('/actions/marker');

router.get('/getAll/:binder/:marker', markerAction.getAll);
router.post('/insert/:binder/:marker', markerAction.insert);
router.put('/update/:binder/:marker', markerAction.update);
router.delete('/remove/:binder/:marker', markerAction.remove);

module.exports = router;

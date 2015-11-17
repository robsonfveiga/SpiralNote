var express = require('express');
var router = express.Router();
var markerAction = requireRoot('/actions/marker');


/**
 * @api {get} /markers/getAll/:binder Get all markers by binder
 * @apiName ms-marker
 * @apiGroup Marker
 *
 * @apiParam {String} Binder binder that the marker is attachment.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *     
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "BinderNotFound"
 *     }
 */
router.get('/getAll/:binder', markerAction.getAll);
router.post('/insert/:binder/:marker', markerAction.insert);
router.put('/update/:binder/:marker', markerAction.update);
router.delete('/remove/:binder/:marker', markerAction.remove);

module.exports = router;

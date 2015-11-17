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
router.get('/:binder', markerAction.get);
router.post('/:binder/:marker', markerAction.insert);
router.put('/:binder/:marker', markerAction.update);
router.delete('/:binder/:marker', markerAction.remove);

module.exports = router;

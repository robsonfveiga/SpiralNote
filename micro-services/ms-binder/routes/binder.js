var express = require('express');
var router = express.Router();
var binderAction = requireRoot('/actions/binder');


/**
 * @api {get} /binders/getAll/:login Get all binders by login
 * @apiName ms-binder
 * @apiGroup Binder
 *
 * @apiParam {String} email user logged.
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
 *       "error": "UserNotFound"
 *     }
 */
router.get('/getAll/:login', binderAction.getAll);
router.get('/getById/:id', binderAction.getById);

module.exports = router;

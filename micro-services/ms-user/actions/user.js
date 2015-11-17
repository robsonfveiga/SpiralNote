var User = require('../models/user.js');
var collection = db.get("user");

module.exports = {
    
    get: function(req, res, next) {
        collection.find({}, function (err, values) {
            if (err) {
                res.status(500).send({ msg: 'error:' + err })
            } else {
                res.status(200).json(values);
            }
        });
    },
    insert: function (req, res) {
        var user = new User();
        user.mappingBody(req.body);

        collection.insert(user, function (err, result) {
            res.send((err === null) ? { msg: '' } : { msg:'error:' + err});
        });
    },
    update: function (req, res) {
        var user = new User(req.params.id);
        user.mappingBody(req.body);
        collection.updateById(user._id, user , function (err, result) {
            res.send((result === 1) ? { msg: '' } : { msg: 'error: ' + err });
        });
    },
    remove: function (req, res) {
        var id = req.params.id;
        collection.remove({_id:id}, function (err, result) {
            res.send((result === 1) ? { msg: '' } : { msg: 'error: ' + err });
        });
    }
}
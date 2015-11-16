var User = require('../models/user.js');
var collection = db.get("user");

module.exports = {
    
    getAll: function(req, res, next) {
        collection.find({}, function (err, values) {
            if (err) {
                res.send({ msg: err })
            } else {
                res.json(values);
            }
        });
    },
    insert: function (req, res) {
        var user = new User();
        user.mappingBody(req.body);

        collection.insert(user, function (err, result) {
            res.send((err === null) ? { msg: '' } : { msg: err });
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
var collection = db.get('binder');

module.exports = {
    getAll: function (req, res) {
        collection.find({ login: req.params.login}, function (err, result) {
            if (err) {
                res.send({msg:err});
            } else { 
                res.json(result);
            }
        })
    },
    getById: function (req, res) {
        collection.find({ id: req.params.id }, function (err, result) {
            if (err) {
                res.send({ msg: err });
            } else {
                res.json(result);
            }
        })
    }
}
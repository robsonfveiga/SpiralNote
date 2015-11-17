var collection = db.get('binder');

module.exports = {
    get: function (req, res) {
        collection.find({ id: req.params.id }, function (err, result) {
            if (err) {
                res.send({ msg: err });
            } else {
                res.json(result);
            }
        })
    }
}
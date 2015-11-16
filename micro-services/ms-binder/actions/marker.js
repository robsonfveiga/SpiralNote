var Marker = require('../models/Marker.js');
var collection = db.get('binder');

module.exports = {
    getAll: function (req, res) {
        collection.find(
            { 'binder.name': req.params.binder },
            { fields: { 'binder.$': 1 } },
            function (err, result) {
                if (err) { res.send({ msg: 'error: ' + err}) }
                res.json(result);
            }
        );
    },
    insert: function (req, res) {
        collection.update({ 'binder.name': req.params.binder },
        {
            $push: {
                'binder.$.marker': {
                    name: req.params.marker,
                    sheet: [
                        {
                            name: 'New Sheet',
                            text: '',
                        }
                    ]
                }
            }
        }, function (err, result) {
            res.send((result === 1) ? { msg: '' } : { msg: 'error: ' + err });
        });
    },
    update: function (req, res) {
        var marker = new Marker();
        marker.mappingBody(req.body);

        collection.update(
        {
            'binder.name': req.params.binder,
            'binder.marker.name': req.params.marker
        },
        {
            $set: { 'binder.0.marker.0.name': marker.name }
        }, function (err, result) { 
            res.send((result === 1) ? { msg: '' } : { msg: 'error: ' + err });
        });
    },
    remove: function (req, res) {
        collection.update({ 'binder.name': req.params.binder },
        {
            $pull: {
                'binder.$.marker': {
                    name: req.params.marker
                }
            }
        }, function (err, result) {
            res.send((result === 1) ? { msg: '' } : { msg: 'error: ' + err });
        });
    }
}
// JavaScript Document
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var country = require('../model/country.js');

router.post('/submit', function(req, res) {
    console.log('save');
    console.log(req.body.data);
    var data = {
        name: req.body.data.name,
    };
    console.log(data);
    var newrecord = new country(data);
    newrecord.save(function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        res.send({
            message: 'success'
        });
    });
});
router.get('/list', function(req, res) {
    country.find({},function(err,docs){

    	res.json(docs);
    })
});

router.put('/savestates/:id', function (req, res){
    console.log('savestates');
    console.log (req.body.data);
    var id = req.params.id;
    var data = {
        _id:mongojs.ObjectId(),
        name : req.body.data.name,
    };
    
    var query = {'_id' : mongojs.ObjectId(id)};
    
    country.findOneAndUpdate(query, {
        $push : {
             states : data }
        }, function(err, doc){
        if(err){
            res.status(500).send({
                msg: err.message
            });
        }
        else {
            res.json(doc);
        }
        
    });
});

router.get('/liststates/:id',function(req, res){
    console.log ('liststates' + req.params.id);
    var id = req.params.id;
    var query = {'_id' : mongojs.ObjectId(id)};
    country.find(query,function(err,docs){
        if(err) res.status(500).send({msg:err.message});
        else res.json(docs);
    })
})

module.exports = router;
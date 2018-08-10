// JavaScript Document
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var user = require('../model/user.js');


router.post('/submit', function(req, res) {
    console.log('save');
    console.log(req.body.data);
    var data = {
        name: req.body.data.name,
        state: req.body.data.state,
        city: req.body.data.city,
        zip: req.body.data.zip,
        countryid: req.body.data.countryid,
    };
    console.log(data);
    var newrecord = new user(data);
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
router.get('/list',function(req,res){
    var cursor = user.aggregate([
        {
            $lookup:
                {
                    from:'countries',
                    localField:'countryid',
                    foreignField:'_id', 
                    as:'countrydocs'
                }
        }
    ]);

    cursor.exec(function (err, docs){
        if(err) res.status(500).send({msg:err.message});
        else {
            res.json(docs);
        }
    });

})
router.get('/list2',function(req,res){
    user.find({},function(err,docs){
        if(err) res.status(500).send({msg:err.message});
        else res.json(docs);
    })
})

router.put('/update', function(req,res){
    var query = { 'id': mongojs.ObjectId(req.body.data.id)};
    var updatedata = {
        name: req.body.data.name,
        state: req.body.data.state,
        city: req.body.data.city,
        zip: req.body.data.zip,
    };
    user.findOneAndUpdate(query, updatedata, function (err, doc){
        if (err) {
            res.status(500).send({msg:err.message});
        }
        else {
            res.json(doc);
        }
    });
});

router.delete('/delete/:id', function(req, res) {
    user.findByIdAndRemove(req.params.id, function(err, doc) {
        if (err) {
            res.status(500).send({
                msg: err.message
            });
        }
        else res.json(doc);
    })
});

router.put('/savemarks/:id', function (req, res){
    console.log (req.body.data);
    var id = req.params.id;
    var data = {
        _id:mongojs.ObjectId(),
        _class : req.body.data._class,
        math : req.body.data.math,
        science : req.body.data.science,
        english : req.body.data.english
    };
    
    var query = {'_id' : mongojs.ObjectId(id)};
    
    user.findOneAndUpdate(query, {
        $push : {
             marks : data }
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

router.get('/listmarks/:id',function(req, res){
    console.log ('listmarks' + req.params.id);
    var id = req.params.id;
    var query = {'_id' : mongojs.ObjectId(id)};
    user.find(query,function(err,docs){
        if(err) res.status(500).send({msg:err.message});
        else res.json(docs);
    })
})

router.delete('/deletemarks/:id',function(req, res){
    console.log('deletemarks');
    var id = req.params.id;
    console.log(id);
    user.findOne({'marks._id':id}, function(err,result){
        if(err) res.status(500).send({msg:err.message});
        else {
            result.marks.id(id).remove();
            result.save();
            res.json(result);
        }

    })
})

router.put('/updatemarks/:id',function(req, res){
    console.log('updatemarks');
    var id = req.params.id;
    user.findOneAndUpdate({'marks._id':id},  function(err,doc){
        if(err) res.status(500).send({msg:err.message});
        else {
            //result.marks.id(id).remove();
            
            result.marks.id(id);
            result.marks.math;
            esult.marks.science;
            esult.marks.english;
            
            result.save();
            res.json(result);
        }

    })
})

// router.get('/countries', function(req,res){
//     var cursor = users.aggregate([
//         {
//             $lookup:
//                 {
//                     from:'countries',
//                     localField:'countryid',
//                     foreignField:'_id', 
//                     as:'countrydocs'
//                 }
//         }
//     ]);

//     cursor.exec(function (err, docs){
//         if(err) res.status(500).send({msg:err.message});
//         else {
//             res.json(docs);
//         }
//     });
// });
module.exports = router;
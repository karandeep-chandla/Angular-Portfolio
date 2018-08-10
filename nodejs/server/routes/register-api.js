// JavaScript Document
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var register = require('../model/register.js');
var auth = require('../auth/auth');

router.post('/login',function(req,res){
    register.findOne({email:req.body.data.email},'+password',function(err,user){
        if(!user){
            console.log("user");
             return res.send({success:false,message:'email Incorrect'});
            }
        else{
            user.comparePassword(req.body.data.password,function(err,isMatch){
                if(!isMatch){
                    console.log("Wrong user");
                    return res.json({success:false,message:'Wrong Password'});
                }
                res.json({success:true,token:auth.createJWT(user),name:user.name});
            });
        }
    });
});

router.post('/insert', function(req, res) {
    console.log('Insert API text');
    console.log(req.body.data);

    var data = {
        name: req.body.data.name,
        email: req.body.data.email,
        password: req.body.data.password,
    };

    console.log(data);
    var newrecord = new register(data);
    newrecord.save(function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        res.json({
            message: 'success'
        });
    });
});

// router.get('/list',function(req,res){
//     intro.find({},function(err,docs){
//         if(err) res.status(500).send({msg:err.message});
//         else res.json(docs);
//     })
// })

module.exports = router;
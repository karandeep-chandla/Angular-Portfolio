// JavaScript Document

var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

// var register = new Schema ({
// 	name : String,
// 	email : String,
// 	password : String,
// });

//var bcrypt = require('bcrypt');
var bcrypt = require('bcryptjs');

var register = new Schema ({
	created : {type: Date},
	updated : {type: Date},
	name : String,
	email : { type :String, unique: true},
	password : { type :String, select: false},
},
	{ versionkey: false }
);

register.pre('save', function(next){
	now = new Date();
	this.update = now;
	if(!this.created){
		this.created = now;
	}
	var user = this;
	if(!user.isModified('password')){
		return next();
	}
	bcrypt.genSalt(10, function (err, salt){
		bcrypt.hash(user.password, salt, function (err, hash){
			user.password = hash;
			next();
		});
	});
});

register.methods.comparePassword = function(password,done){
    bcrypt.compare(password,this.password,function(err,isMatch){
        console.log(this.password);
        done(err,isMatch);
    });
};
module.exports = mongoose.model('register', register);
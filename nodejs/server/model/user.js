// JavaScript Document

var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var user = new Schema ({
	name : String,
	city : String,
	age : Number,
	zip : Number,
	countryid: Schema.ObjectId,

	marks: [{
		_id : Schema.ObjectId,
		_class  : String,
		math    : Number,
		english : Number,
		science : Number
	}]
});


module.exports = mongoose.model('user', user);
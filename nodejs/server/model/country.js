// JavaScript Document

var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var country = new Schema ({
	name : String,
	
	states: [{
		_id : Schema.ObjectId,
		name : String,
	}]
});

module.exports = mongoose.model('country', country);
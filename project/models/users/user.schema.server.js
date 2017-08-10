var mongoose = require('mongoose');
var ProjectUserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    dateCreated: Date,
    email: String
});
module.exports = ProjectUserSchema;
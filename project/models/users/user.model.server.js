
var mongose = require('mongoose');
var ProjectUserSchema = require('./user.schema.server');

var ProjectUserModel = mongose.model('ProjectUserModel', ProjectUserSchema);

ProjectUserModel.createUser = createUser;
ProjectUserModel.findUserById = findUserById;
ProjectUserModel.findUserByCrendential = findUserByCrendential;
ProjectUserModel.deleteUser = deleteUser;
ProjectUserModel.updateUser = updateUser


module.exports = ProjectUserModel;

function updateUser(userId, user) {
    return ProjectUserModel.update({_id: userId},
        {$set:{username:user.username, password:user.password,
            firstName: user.firstName, lastName: user.lastName, email: user.email}})
}

function deleteUser(userId) {
    return ProjectUserModel.remove({_id: userId});
}

function createUser(user) {
    return ProjectUserModel.create(user);
}

function findUserById(userId) {
    return ProjectUserModel.findById(userId)
}

function findUserByCrendential(username, password) {
    return userModel.findOne({username: username, password: password});
}
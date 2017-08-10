var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost/webdev_summer1_2017');

todoSchema = mongoose.Schema({
    title: String,
    dueDate: Date
})

todoModel = mongoose.model('TodoModel', todoSchema);

todoModel.findAllTodos = findAllTodos
todoModel.createTodos = createTodos

modules.export = todoModel


findAllTodos()
    .then(function (docs) {
    console.log(docs)
})

function findAllTodos() {
    return todoModel.find()
}



// var todo1={
//     title:'pick up milk',
//     dueDate: new Date()
// }
//
// todoModel
//     .create(todo1)
//     .then(function (doc) {
//         console.log(doc)
//     }, function (err) {
//         console.log(err)
//     });
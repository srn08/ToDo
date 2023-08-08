const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req,res) => {
    const ToDo = await ToDoModel.find()
    res.send(ToDo)
}

module.exports.saveToDo = async (req,res) => {
    const {text} = req.body
    ToDoModel
    .create({text})
    .then((data)=> {
        console.log('added successfully')
        console.log(data)
        res.send(data)
    })
}

module.exports.deleteToDo = async (req,res) => {
    const {id} = req.body
    ToDoModel.findByIdAndDelete(id).then(res.send('Deleted')).catch((err)=> console.log(err))
}

module.exports.updateToDo = async (req,res) => {
    const {text,id} = req.body
    ToDoModel.findByIdAndUpdate(id, {text}).then(res.send('Updated')).catch((err)=> console.log(err))
    
}





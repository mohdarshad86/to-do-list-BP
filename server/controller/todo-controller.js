const Todo = require('../model/Todo.js');

const addTodo = async (req, res) => {
    try {
        let data = req.body
        const newTodo = await Todo.create(data)
        await newTodo.save();

        return res.status(200).send(newTodo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return res.status(200).send(todos);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const toggleTodoDone = async (req, res) => {
    let paramId = req.params.id
    try {
        const todoRef = await Todo.findById(paramId);

        const todo = await Todo.findOneAndUpdate(
            { _id: paramId },
            { done: !todoRef.done }
        )

        await todo.save();

        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateTodo = async (req, res) => {
    try {
        let paramId = req.params.id
        let data = req.body
        await Todo.findOneAndUpdate(
            { _id: paramId },
            data
        )

        const todo = await Todo.findById(paramId);

        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTodo = async (req, res) => {
    try {
        let paramId = req.params.id

        const todo = await Todo.findByIdAndDelete(paramId)

        return res.status(200).send(todo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo }
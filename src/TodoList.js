import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const INITIAL_DATA = { todo: "" };
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: uuid(), value: formData.todo, showEdit: false, isComplete: false }]);
        setFormData({ ...formData, todo: "" });
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    const deleteLi = (e) => {
        const { id } = e.target;
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const markComplete = (e) => {
        const { id } = e.target;
        setTodos(todos.map(todo => todo.id === id ? updateComplete(todo) : todo));
    }

    const updateComplete = (todo) => {
        todo.isComplete = todo.isComplete ? false : true;
        return todo;
    }

    const editForm = (e) => {
        const { id } = e.target;
        setTodos(todos.map(todo => todo.id === id ? updateEdit(todo) : todo));
    }

    const updateEdit = (todo) => {
        todo.showEdit = todo.showEdit ? false : true;
        return todo;
    }

    const submitEditForm = (e) => {
        e.preventDefault();
        const { id } = e.target;
        setTodos(todos.map(todo => todo.id === id ? updateSubmitEditForm(todo) : todo));
    }

    const updateSubmitEditForm = (todo) => {
        todo.value = formData[todo.id];
        todo = updateEdit(todo);
        return todo;
    }

    return (
        <div>
            <NewTodoForm value={formData.todo} handleSubmit={handleSubmit} handleChange={handleChange} />
            {todos.map(todo => <Todo
                id={todo.id}
                key={todo.id}
                value={todo.value}
                showEdit={todo.showEdit}
                isComplete={todo.isComplete}
                handleChange={handleChange}
                deleteLi={deleteLi}
                markComplete={markComplete}
                editForm={editForm}
                submitEditForm={submitEditForm}
            />)}
        </div >
    )
}

export default TodoList;
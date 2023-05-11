import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo.js';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const INITIAL_DATA = "";
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: uuid(), value: formData, showEdit: false }]);
        setFormData(INITIAL_DATA);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setFormData(value);
    }

    const deleteLi = (e) => {
        const { id } = e.target;
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const editForm = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { id } = e.target;
        setTodos(todos.map(todo => todo.id === id ? updateEdit(todo) : todo));
    }

    const updateEdit = (todo) => {
        // if (todo.showEdit) {
        //     todo.value = 
        // }
        todo.showEdit = todo.showEdit ? false : true;
        return todo;
    }

    return (
        <div>
            <NewTodoForm value={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
            {todos.map(todo => <Todo
                id={todo.id}
                key={todo.id}
                value={todo.value}
                showEdit={todo.showEdit}
                deleteLi={deleteLi}
                editForm={editForm}
            />)}
        </div >
    )
}

export default TodoList;
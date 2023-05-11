
const NewTodoForm = ({ value, handleSubmit, handleChange }) => {

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: 50, marginBottom: 25, textAlign: "center" }}>
            <label htmlFor="todo">Enter Todo: </label>
            <input
                id="todo"
                name="todo"
                type="textarea"
                placeholder="Todo Here"
                value={value}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;
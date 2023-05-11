
const Todo = ({ id, value, showEdit, isComplete, handleChange, deleteLi, markComplete, editForm, submitEditForm }) => {

    return (
        <div style={{ textDecoration: isComplete ? "line-through" : "", fontSize: "2em", marginLeft: 25 }}>
            <button id={id} onClick={markComplete} style={{ margin: 0 }}>Mark Complete</button>
            <button id={id} onClick={deleteLi} style={{ margin: 10 }}>DEL</button>
            {value}
            {!showEdit &&
                <button id={id} onClick={editForm} style={{ margin: 10 }}>Edit</button>
            }
            {showEdit &&
                <form id={id} onSubmit={submitEditForm} style={{ display: "inline-block" }}>
                    <label htmlFor={id} style={{ margin: 5 }}></label>
                    <input id={id} placeholder="Type Edit" onChange={handleChange}></input>
                    <button style={{ margin: 5 }}>Submit</button>
                </form>
            }
        </div>
    )
}

export default Todo;
const TodoList = ({todoData,editTodo,deleteTodo}) =>{
    return(
        <>
        <table border="2px solid black">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Description</th>
                    <th colSpan="2">Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    todoData.map((t)=>{
                        return(
                            <tr key={t._id}>
                                <td>{t.task}</td>
                                <td>{t.description}</td>
                                <td>
                                    <button onClick={()=>editTodo(t._id)}>Edit</button>
                                </td>
                                  <td>
                                <button onClick={() => deleteTodo(t._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default TodoList;
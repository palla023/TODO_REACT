import React from 'react'

const TodoList = ({ todolist, deleteHandler, toggleHandler }) => {
    return (
        // <div>
        //     {todolist.map((todo, index) =>
        //         <div key={index}>
        //             <h5 >{todo} &nbsp;
        //                  <button className='p-1' onClick={() => deleteHandler(index)}>Delete</button></h5>
        //         </div>)}
        // </div>
        <div>
            {todolist.map((todo, index) =>
                <div key={index} style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}>
                    {/* <input
                        type="checkbox"
                        checked={todo.completed}
                        onClick={(e) => toggleHandler(index)}
                    /> */}
                    <div className={todo.completed ? 'done' : ''}
                        style={{ display: "flex", flexDirection: "row" }}>
                        <input type="checkbox" checked={todo.completed}
                            onChange={() => toggleHandler(index)} />
                        <h5 className='taskText'>
                            {todo.task}</h5>
                    </div>
                    <button className='editbtn' >Edit</button>
                    <button className='delbtn' onClick={() => deleteHandler(index)}>Delete</button>
                </div>
                )}

        </div>
    )
}

export default TodoList

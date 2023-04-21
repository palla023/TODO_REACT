import React from 'react';


const ToDo = ({ todos, toggleHandler, setUpdateData, deleteHandler }) => {
  return (
    // <>
    //   {toDo && toDo
    //     .sort((a, b) => a.id > b.id ? 1 : -1)
    //     .map((task, index) => {
    //       return (
    //         <React.Fragment key={task.id}>
    //           <div className="col taskBg">
    //             <div className={task.status ? 'done' : ''}>
    //               <span className="taskNumber">{index + 1}</span>
    //               <span className="taskText">{task.title}</span>
    //             </div>
    //             <div className="iconsWrap">
    //               <span title="Completed / Not Completed"
    //                 onClick={(e) => markDone(task.id)} style={{ color: "lightblue" }}
    //               >
    //                 <FontAwesomeIcon icon={faCircleCheck} />
    //               </span>

    //               {task.completed ?
    //                 <button className='disabledbtn' >Edit</button>
    //                 : (
    //                   <button className='editbtn' >Edit</button>
    //                 )}

    //               <button className='delbtn'
    //                 onClick={() => deleteHandler(index)}>Delete</button>
    //             </div>
    //           </div>
    //         </React.Fragment>
    //       )
    //     })
    //   }
    // </>
    <>
      {todos.map((todo, index) =>
        <div key={todo.id} className='row aligncolumn' >
          {/* <input
              type="checkbox"
              checked={todo.completed}
              onClick={(e) => toggleHandler(index)}
          /> */}
          <div className={todo.completed ? 'done col-5' : ''}
            style={{ display: "flex", flexDirection: "row" }}>
            <input type="checkbox" checked={todo.completed}
              onChange={() => toggleHandler(todo.id)} />
            <h5 className='taskText'>
              {todo.task}</h5>
          </div>
          <div className='buttonswrap '>
            {todo.completed ?
              <button className='disabledbtn' >Edit</button>
              : (
                <button className='editbtn'
                  onClick={() => setUpdateData(todo)}>Edit</button>
              )}

            <button className='delbtn'
              onClick={() => deleteHandler(todo.id)}>Delete</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ToDo;
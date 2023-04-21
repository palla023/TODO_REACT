import React, { useState } from 'react'
import TodoList from './TodoList';
import ToDo from './Components/ToDo';
import AddTaskForm from './Components/AddTaskForm';
import UpdateForm from './Components/UpdateForm';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


const App = () => {
  //Create a Variable to store the User Input Data
  const [task, setTask] = useState("");
  const [updateData, setUpdateData] = useState('')

  //Create a List to store the all the ToDo's whatever we are submitting the data from the Form
  const [todos, setTodos] = useState([]);

  //By using SetTask Variable we can set the user input data
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    if(task){
    let num = todos.length + 1
    //what we have previous toDo's that will be not missing , for that we have used ...todo's
    //next we have to add new todo's also, for that we have used user input storing variable task
    const newTodos = [...todos, {id:num, task: task, completed: false }];
    //assign the newtodos to the list variable
    setTodos(newTodos);
    //After Submit the data to the list, Reset the form (input data)
    setTask("");
    }
  }
  const deleteHandler = (id) => {
    //Except the index value what we are passed in delete button, remaining all items shouls be filtered and set to todos list
    const newTodos = todos.filter((todo) => todo.id !== id); // todos is a list to hold all the todos values 
    setTodos(newTodos);
  }

  const toggleHandler = (id) => {
    setTodos(todos.map(
      (task) => task.id === id
        ? ({ ...task, completed: !task.completed })
        : (task)
    ))
  }

  const cancelUpdate = () => {
    setUpdateData('')
  }

  const changeHolder = (e) => {
    setUpdateData({ ...updateData, task: e.target.value })

  }

  const updateTask = () => {
    let removeOldRecord = [...todos].filter((task) => task.id !== updateData.id)
    setTodos([
      ...removeOldRecord,
      updateData
    ])

    setUpdateData('')
  }
  const resetHandler = () => {
    setTodos([])
  }

  return (
    <div>
      <Navbar/>
      <center style={{paddingTop:"50px"}}>
        <div className='d-flex flex-col justify-content-center p-5'>
          <div className="card shadow ">
            <div className="card-body">
              <h5 className="card-title">Todo Management Application</h5>

              {updateData && updateData ? (
                <UpdateForm
                  updateData={updateData}
                  changeHolder={changeHolder}
                  updateTask={updateTask}
                  cancelUpdate={cancelUpdate}
                />
              ) : (
                <AddTaskForm
                  newTask={task}
                  setNewTask={setTask}
                  addTask={submitHandler}
                />
              )}
              {todos && todos.length ? '' : 'No Tasks...'}

              <ToDo
                todos={todos}
                toggleHandler={toggleHandler}
                setUpdateData={setUpdateData}
                deleteHandler={deleteHandler}
              />
              {/* send the todos data to another component */}
              {/* <TodoList todolist={todos} deleteHandler={deleteHandler} toggleHandler={toggleHandler} /> */}
              {todos && todos.length ?
                <button className='resetbutton m-2'
                  onClick={resetHandler}>Reset</button> : ''}
            </div>
          </div>
        </div>
      </center>
      <Footer />
    </div>
  )
}

export default App

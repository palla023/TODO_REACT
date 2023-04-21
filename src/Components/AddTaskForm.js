const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
	return (
		<>
			{/* Add Task */}
			<div className="row">
				<div className="col">
					<form onSubmit={addTask}>
						<input size="30" type="text" name="newTask" value={newTask}
							onChange={(e) => setNewTask(e.target.value)} /> &nbsp;&nbsp;
						<input type="submit" value="Add" name="Add" className="submitbtn"/>
					</form>
				</div>
			</div>
			<br />
		</>
	)
}

export default AddTaskForm;
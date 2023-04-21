const UpdateForm = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
	return (
		<>
			<div className="row">
				<div className="col aligncolumn">
					<form onSubmit={updateTask}>
						<input size="30" type="text" name="updateData"
							value={updateData && updateData.task}
							onChange={(e) => changeHolder(e)}
						/> &nbsp;&nbsp;
						<input type="submit" value="Update" name="Add"
						className="updatebtn"	/>
					</form>
					<button
						onClick={cancelUpdate}
						className="cancelbtn"
					>Cancel</button>

				</div>
			</div>
			<br />
		</>
	)
}

export default UpdateForm;
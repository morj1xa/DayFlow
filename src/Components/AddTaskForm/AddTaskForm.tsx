import "./AddTaskForm.css";
export default function AddTaskForm() {
  return (
    <form className="add-task" action="">
      <h1>Создайте привычку</h1>
      <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
        {" "}
        <label htmlFor="task">таск</label>
        <input id="task" type="text" placeholder="Enter your habbit" />
      </div>
      <button className="create-button" type="submit">
        Create habbit
      </button>
    </form>
  );
}

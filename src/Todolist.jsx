import React, { useState } from "react";
import "./Todolist.css";
function Todolist() {
  const [tasks, setTasks] = useState(["start up"]);
  const [newTasks, setNewTasks] = useState("");
  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }
  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  return (
    <div className="to-do-list">
      <h1>Todo-List</h1>
      <input
        type="text"
        placeholder="Enter a Task"
        value={newTasks}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        add
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Todolist;

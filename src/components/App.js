import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

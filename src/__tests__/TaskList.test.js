// components/TaskList.js
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <Task text={task.text} category={task.category} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;

import React from "react";

const Task = ({ text, category }) => {
  return (
    <div>
      <span>{text}</span>
      <span>{category}</span>
    </div>
  );
};

export default Task;

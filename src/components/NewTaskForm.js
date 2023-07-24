import React, { useState } from "react";

const NewTaskForm = ({ onTaskFormSubmit }) => {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("All");

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text: details, category });
    setDetails("");
    setCategory("All");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details:
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="All">All</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;

import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0] || "");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0] || "");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="details">Details</label>
      <input
        id="details"
        type="text"
        name="text"
        placeholder="Details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;

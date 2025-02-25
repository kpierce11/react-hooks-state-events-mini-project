import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data"; // your data source

function App() {
  // Initialize state with tasks and the selected category
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  // And a function to add new tasks
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // And a function to change the category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Before rendering TaskList, filter tasks based on selectedCategory
  const tasksToDisplay = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <TaskList 
        tasks={tasksToDisplay} 
        onDeleteTask={handleDeleteTask} 
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(c => c !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Task from './Task';  // Import the Task component
import './styles.css' //import the css file

function App() {
  const [tasks, setTasks] = useState([
    { title: 'Grocery Shopping', description: 'Buy milk, eggs, and bread' },
    { title: 'Pay Bills', description: 'Electricity and internet' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const addTask = () => {
    if (newTaskTitle.trim() !== "") { //Prevent adding empty tasks
      setTasks([
        ...tasks,
        { title: newTaskTitle, description: newTaskDescription },
      ]);
      setNewTaskTitle('');
      setNewTaskDescription('');
    } else {
      alert("Task Title cannot be empty!")
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      <div className="add-task"> {/* Container for adding tasks */}
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list"> {/* Container for the task list */}
        {tasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            onDelete={() => deleteTask(index)} // Pass the delete function
          />
        ))}
      </div>
    </div>
  );
}

export default App;
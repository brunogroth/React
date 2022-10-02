import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text:'Doctors Appointment',
        day: 'October 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'October 6th at 5:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'October 2nd at 7:00am',
        reminder: false,
    }
])

//Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1 // Generating a random ID
  const newTask = { id, ...task}

  setTasks ([...tasks, newTask])
}



//Delete Task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const togglerReminder = (id) => {
setTasks(tasks.map((task) => (task.id === id ? {...task, reminder:!task.reminder} : task)))
}

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={togglerReminder}/> : <p className="noTasksText">Lazy day! Nothing to show.</p> }
    </div>
  );
}


//Older way to do it using class:
// class App extends React.Component{
//   render(){
//     return <h1>a</h1>
//   }
// }

export default App;

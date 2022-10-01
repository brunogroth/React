import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
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

const name = "Brad";
const x = 1+1;
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
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

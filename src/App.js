import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {v4} from'uuid'
import List from "./compnents/List";
import  Addlist from'./compnents/Addlist'


function App() {
  const DATA = [
    { id: v4(), name: "Eat", },
    { id: v4(), name: "Sleep",  },
    { id: v4(), name: "Repeat", }
  ];

  const [tasks, setTasks] = useState(DATA);

  function deleteTask(id) {
    const remain  =[...tasks]
    const remainingTasks = remain.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }


  function editTask(id, newName) {
  
     const rem = [...tasks]
    const editedTaskList = rem.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }



  const taskList = tasks.map(task => (
    <List
      id={task.id}
      name={task.name}
      key={task.id}
       deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  function addTask(name) {
    
    const newTask = { id: v4(), name: name, };
    setTasks([...tasks, newTask]);
  }


  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes){
      setTasks(savedNotes)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(tasks))
  },[tasks])

  return (
    <div className="app">
     <Addlist add={addTask}  />
        {taskList}
    </div>
  );
}

export default App;

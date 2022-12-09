import React from "react";
import "./App.css";
// import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoForm from "./components/ToDOForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div className="container">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
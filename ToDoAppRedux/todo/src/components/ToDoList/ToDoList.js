// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import {todoSelector} from "../../todoReducer";
import "./ToDoList.css";

function ToDoList() {

 const value=useSelector(todoSelector);

  return (
    <ul className="list">{
      value.map(i=><li>{i}</li>)
    }
    </ul>
  );
}

export default ToDoList;
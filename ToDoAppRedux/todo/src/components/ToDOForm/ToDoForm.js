import { useState } from "react";
import {add, update} from "../../todoReducer";
import {useDispatch} from "react-redux";

function ToDoForm() {

  const [value, setValue]=useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input value={value} onInput={(e)=>{setValue(e.target.value)}} type="text" className="form-control" />
        <button type="submit" onClick={()=>{dispatch(add(value))}} className="float-end mt-2 btn btn-success">
          Add
        </button>
        <button type="update" onClick={()=>{dispatch(update(value))}} className="float mt-2 btn btn-success">
          update
        </button>
      </div>
    </div>
  );
}

export default ToDoForm;
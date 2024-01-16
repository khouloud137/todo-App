import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";
import { useDispatch } from "react-redux";
import { addTask, isDoneTask, allTask, fiterTaske } from "../redux/actions";
function TodoList() {
  const dispatch = useDispatch();
  const todo = useSelector((store) => store.todo);
  const filtervalue = useSelector((store) => store.filtervalue);
  const [newtask, setNewTask] = useState({});
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTask(newtask));
    e.target.reset();
  };
  const handelFilterTask = (e, payload) => {
    e.preventDefault();
    dispatch(fiterTaske(payload));
  };
  return (
    <div className="todoList">
      <form
        onSubmit={handleAdd}
        className="add-task"
        onChange={(e) => {
          setNewTask({ ...newtask, [e.target.name]: e.target.value });
        }}
      >
        <div className="input-task">
          <input
            className="task"
            placeholder="Enter a Todo Item..."
            name="description"
            type="text"
          />
          <button type="sumbit" className="btnadd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
          </button>
        </div>
      </form>
      <div className="filter-btns">
        <button className="btns" onClick={(e) => handelFilterTask(e, "all")}>
          ALL
        </button>
        <button
          className="btns"
          onClick={(e) => handelFilterTask(e, "isdonne")}
        >
          {" "}
          ISDONE{" "}
        </button>
        <button className="btns" onClick={(e) => handelFilterTask(e, "notdone")}>NOTDONE</button>
      </div>
      <div className="card-list">
        {todo
          .filter((elt) => {
            if (filtervalue === "all") return true;
            else if (filtervalue === "isdonne") return elt.isdone === true;
            else if (filtervalue === "notdone") return elt.isdone === false;
          })
          .map((todos) => (
            <TodoItems key={todos.id} {...todos} />
          ))}
      </div>
    </div>
  );
}

export default TodoList;

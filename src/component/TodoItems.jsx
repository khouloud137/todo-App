import React, { useState } from "react";
import { editTask, deleteTask ,isDone} from "../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoItems({ id, description, isdone }) {
  const dispatch = useDispatch();
  const [showEdit, setshowEdit] = useState(false);
  const [newTasckData, setnewTasckData] = useState({});
  const handelShow = () => {
    setshowEdit(!showEdit);
  };
  const handelSave = () => {
    dispatch(editTask({ id: id, newTasckData }));
    handelShow();
  };
  return (
    <>
      {showEdit ? (
        <form
          className="add-task"
          onChange={(e) => {
            setnewTasckData({
              ...newTasckData,
              [e.target.name]: e.target.value,
            });
          }}
        >
          <div className="cards-todoItem">
            <input
              className="task-input"
              name="description"
              defaultValue={description}
            />
            <div>
              <button
                onClick={() => {
                  handelSave();
                }}
              >
                save
              </button>
              <button
                onClick={() => {
                  handelShow();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="cards-todoItem">
          <div className="container">
            <span>{description}</span>
          </div>
          <div className="card-icone">
            <button
              onClick={() => {
                dispatch(deleteTask(id));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
              </svg>
            </button>
            <button
              onClick={() => {
                handelShow();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
              </svg>
            </button>
            <button style={isdone == true ? {backgroundColor:"green" }: null} onClick={()=> dispatch(isDone(id))}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="17.5"
                viewBox="0 0 448 512"
              >
                {" "}
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItems;

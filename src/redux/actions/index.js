export const addTask = (payload) => {
  return {
    type: "ADD-TASK",
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: "EDIT-TASK",
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: "DELETE-TASK",
    payload,
  };
};
export const isDone = (payload) => {
  return {
    type: "IS-DONE",
    payload,
  };
};
export const fiterTaske = (payload)=>{
  return{
    type:"FILTER-TASKE",
    payload,
  }
}

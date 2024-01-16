import { v4 as uuidv4 } from "uuid";
const initialeState = {
  todo: [
    {
      id: "21f4a4da-80ae-5945-857f-304390e0bc04",
      description: "learn javascript",
      isdone: false,
    },
    {
      id: "4f9a55b3-2022-57a0-a99c-0ee41c4c2c67",
      description: "Go to gym",
      isdone: false,
    },
    {
      id: "94397298-5d56-5e32-ac86-42af2a1a41d8",
      description: "Drink a cooffe",
      isdone: false,
    },
  ],
  filtervalue : "all",
};

const todoReducer = (state = initialeState, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return {
        ...state,
        todo: [
          ...state.todo,
          { ...action.payload, id: uuidv4(), isdone: false },
        ],
      };
    case "EDIT-TASK":
      return {
        ...state,
        todo: state.todo.map((todos) =>
          todos.id === action.payload.id
            ? { ...todos, ...action.payload.newTasckData }
            : todos
        ),
       
      };
    case "DELETE-TASK":
      return {
        ...state,
        todo: state.todo.filter((todos) => todos.id !== action.payload),
      };
    case "IS-DONE":
      return {
        ...state,
        todo: state.todo.map((todos) =>
          todos.id === action.payload
            ? { ...todos, isdone: !todos.isdone }
            : todos
        ),
      };
    case "FILTER-TASKE":
      
      return {
        ...state,
        filtervalue: action.payload,
      };
    

    default:
      return state;
  }
};
export default todoReducer;

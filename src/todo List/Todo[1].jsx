import { useReducer, useState } from "react";
import { AiFillDelete, AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { text: action.payload, id: Date.now(), completed: false, editing: false }];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text, editing: false } : task
      );

    case "TOGGLE_EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, editing: !task.editing } : task
      );

    case "MARK_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: true } : task
      );

    case "UNMARK_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: false } : task
      );

    default:
      return state;
  }
}

function App_one() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, dispatch] = useReducer(todoReducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TASK", payload: inputValue });
      setInputValue("");
    }
  }

  function handleToggleEdit(task) {
    dispatch({ type: "TOGGLE_EDIT_TASK", payload: task.id });
  }

  function handleMark(task) {
    dispatch({ type: task.completed ? "UNMARK_TASK" : "MARK_TASK", payload: task.id });
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.editing ? (
              <input
                type="text"
                defaultValue={task.text}
                onBlur={(e) => dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: e.target.value } })}
                autoFocus
              />
            ) : (
              <span>{task.text}</span>
            )}
            <AiFillDelete onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })} />
            <AiFillEdit onClick={() => handleToggleEdit(task)} />
            <button onClick={() => handleMark(task)}>
              {task.completed ? <AiOutlineClose /> : <AiOutlineCheck />}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App_one;

import { useState } from "react";
import { Todo } from "./Todo";

export const TodoApp = () => {
  //no ponemos class en XML, sino que ponemos classname
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  /* function handleClick(e) {
    e.preventDefault();
    setTitle("Marcos");
  } */

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      title: title,
      completed: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input
          type="text"
          className="todoInput"
          value={title}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Create todo"
          className="buttonCreate"
          onClick={handleSubmit}
        />
        {title}
      </form>
      <div className="todoContainer">
        {todos.map((item) => (
          <Todo item={item} />
        ))}
      </div>
    </div>
  );
};

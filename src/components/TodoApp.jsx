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
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);
  }
  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id == id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
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
          // Es importante (cuando recorremos algo) poner la key porque es para ayudar a react a identificar los elementos
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

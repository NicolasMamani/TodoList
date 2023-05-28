import { useState } from "react";

export const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // Vamos a crear un componente dentro de un componente
  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    //Función para cuando se actualice el todo
    function handleSubmit(e) {
      e.preventDefault();
    }
    //Función que escucha cada cambio del input type text
    function handleChange(e) {
      //con target obtenemos el elemento html y con .value obtenemos el valor de ese elemento html
      const value = e.target.value;
      setNewValue(value);
    }
    //función para cuando se aprete el botón update
    function handleClickUpdateTodo(e) {
      //Evito el comportamiento por defecto que seria recargar
      e.preventDefault();
      //Ahora voy a usar el prop que recibi que en este caso es una función
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }
    //En esta función vamos a retornar un formulario con un input y un botton de edit
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button
          type="submit"
          className="button"
          onClick={handleClickUpdateTodo}
        >
          Update
        </button>
      </form>
    );
  }
  //Vamos a crear otro componente dentro del Todo
  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            onDelete(item.id);
          }}
        >
          Eliminar
        </button>
      </div>
    );
  }
  return <>{isEdit ? <FormEdit /> : <TodoElement />}</>;
};

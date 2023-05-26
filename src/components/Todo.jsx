import { useState } from "react";

export const Todo = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  return (
    <div>
      {item.title}
      <button
        onClick={() => {
          setIsEdit();
        }}
      >
        Editar
      </button>
      <button>Eliminar</button>
    </div>
  );
};

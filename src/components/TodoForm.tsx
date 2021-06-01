import React, { useState } from "react";
import useAddTodos from "../hooks/useAddTodos";

function TodoForm() {
  const [value, setValue] = useState("");
  const addTodo = useAddTodos();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default TodoForm;

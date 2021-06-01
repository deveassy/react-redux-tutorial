import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch 사용할 함수 자리
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

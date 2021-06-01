import React from "react";
import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button>삭제</button>
    </li>
  );
}

export default TodoItem;

import React from "react";
import useClickAction from "../hooks/useClickAction";
import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useClickAction(todo.id);

  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button style={{ color: "red" }} onClick={onRemove}>
        X
      </button>
    </li>
  );
}

export default TodoItem;

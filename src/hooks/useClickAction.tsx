import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleTodo, removeTodo } from "../modules/todos";

export default function useClickAction(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch]);
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch]);

  return { onToggle, onRemove };
}

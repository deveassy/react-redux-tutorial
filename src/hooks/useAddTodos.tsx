import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { createTodo } from "../modules/todos";

export default function useAddTodos() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(createTodo(text)), [dispatch]);
}

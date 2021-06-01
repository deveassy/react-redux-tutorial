const CREATE_TODO = "todos/CREATE_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

export const createTodo = (text: string) => ({
  type: CREATE_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

type TodosAction =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [
  {
    id: 1,
    text: "이번엔 redux를 배웁니다",
    done: false,
  },
  {
    id: 2,
    text: "context를 까먹어버리는건 아니겠지",
    done: true,
  },
  {
    id: 3,
    text: "n번째 todo list 만들어봅니다",
    done: true,
  },
];

function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case CREATE_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;

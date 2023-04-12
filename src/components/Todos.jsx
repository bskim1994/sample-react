import { useQuery } from "react-query";
import { fetchTodoList } from "../api/api";
import { Todo } from "./Todo";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoState } from "../store/store";
export const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
    refetchOnWindowFocus: false, 
    retry: 0, 
    onSuccess: result => {
      setTodos(result.data);
    },
    onError: e => {
      console.log(e.message);
    }
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <div key={todo.id}>
          <li>{todo.title}</li>
          <Todo entry={todo}/>
        </div>
      ))}
    </ul>
  );
};
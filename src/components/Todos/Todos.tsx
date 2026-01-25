import { useEffect } from "react";
import todosStore from "../../stores/todosStore"
import { List } from "./List"
import { observer } from "mobx-react-lite";

export const Todos = observer(() => {
  const { todos, isLoading, fetchTodos } = todosStore;

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);


  return (
    <div>
      <h1>Todos</h1>
      <List todos={todos} isLoading={isLoading} />
    </div>
  )
})
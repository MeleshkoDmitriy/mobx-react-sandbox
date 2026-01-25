import type { Todo } from "../../types/types"
import { Item } from "./Item"

interface ListProps {
  todos: Todo[]
  isLoading: boolean
}

export const List = ({todos, isLoading}: ListProps) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
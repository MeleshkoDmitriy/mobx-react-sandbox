import type { Todo } from "../../types/types"
import { Item } from "./Item"

interface ListProps {
  todos: Todo[]
}

export const List = ({todos}: ListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
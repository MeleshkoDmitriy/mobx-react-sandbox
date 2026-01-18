import { List } from "./List"

export const Todos = () => {

  return (
    <div>
      <h1>Todos</h1>
      <List todos={[{id: '1', todo: 'Buy milk', completed: true, userId: 1}]} />
    </div>
  )
}
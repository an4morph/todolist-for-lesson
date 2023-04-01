import { TodoItem } from '../todo-item'

export const TodoList = ({ className, title, items }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <ul>
        {
          items.map(todo => (
            <TodoItem 
              key={todo.id}
              {...todo}
            />
          ))
        }
      </ul>
    </div>
  )
}

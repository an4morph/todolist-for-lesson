import styled from 'styled-components'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import { useTodolist } from './hooks/useTodolist'

const StyledTodolist = styled(TodoList)`
  background-color: pink;
  margin-top: 50px;
`

function App() {
  const { todos, toggleTodo } = useTodolist(startTodolist)
  
  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter(
      (todo) => !todo.isDone && new Date(todo.deadline) < today
    )
  }
  const getActualTodos = () => {
    const today = new Date()
    return todos.filter(
      (todo) => !todo.isDone && new Date(todo.deadline) >= today
    )
  }
  const getCompletedTodos = () => {
    return todos.filter((todo) => todo.isDone)
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <StyledTodolist
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodolist
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodolist
        title="Completed"
        items={getCompletedTodos()}
        onToggleTodo={toggleTodo}
      />
    </div>
  )
}

export default App

import styled from 'styled-components'
import { TodoList } from '../components/todo-list'
import { useSelector } from 'react-redux'

const StyledTodolist = styled(TodoList)`
  background-color: pink;
  margin-top: 50px;
`

export const HomePage = () => {
  const todos = useSelector(state => state.todo.items)

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
      />
      <StyledTodolist
        title="Actual"
        items={getActualTodos()}
      />
      <StyledTodolist
        title="Completed"
        items={getCompletedTodos()}
      />
    </div>
  )
}

import styled from "styled-components"
import { todoActions } from "../../store/todoSlice"
import { useDispatch } from "react-redux"

const TodoContainer = styled.li`
  list-style: none;
  background-color: #ccc;

  &:hover {
    color: blue;
  }

  & > input {
    margin-right: 20px;
  }
`
const TodoText = styled.span`
  text-decoration: ${(props) => {
    if (props.isDone) return 'line-through'
    return 'none'
  }};
`

export const TodoItem = ({ id, text, isDone }) => {
  const dispatch = useDispatch()

  const handleToggleTodo = () => {
    dispatch(todoActions.toggleTodo({ id }))
  }

  return (
    <TodoContainer>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
      />
      <TodoText isDone={isDone}>{text}</TodoText>
    </TodoContainer>
  )
}

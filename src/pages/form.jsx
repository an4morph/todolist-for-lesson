import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { todoFormActions } from "../store/todoFormSlice"

const Form = styled.form`
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;
  background-color: #eee;
  
  display: flex;
  flex-direction: column;

  & input {
    margin: 20px 0;
  }
  * {
    font-size: 20px;
  }
`

export const FormPage = () => {
  const { text, deadline } = useSelector(state => state.todoForm.form)

  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(todoFormActions.changeField({
      name: e.target.name,
      value: e.target.value,
    }))
  }

  const handleSave = () => {

  }

  return (
    <>
    <Link to="/">Go back to Todolist</Link>
    <Form>
      <textarea
        name="text"
        value={text} 
        onChange={handleChange}
      ></textarea>
      <input 
        name="deadline"
        type="date"
        value={deadline}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save todo</button>
    </Form>
    </>
  )
}
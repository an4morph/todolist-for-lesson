import { useState } from "react"

export const useTodolist = (initTodo) => {
  const [todos, setTodos] = useState(initTodo)

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return {
    todos,
    toggleTodo
  }
}
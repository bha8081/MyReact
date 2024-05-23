import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  // Context function
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodos delete the all previous value, And set a new Value.
      setTodos((previous) => [{id: Date.now(), ...todo}, ...previous] )
  }

  const updateTodo = (id, todo) => {
    setTodos((previous) => previous.map((previousTodo) => (previousTodo.id === id ? todo : previousTodo )))

  // or some othe way
  /** previous.map((eachVal) => {
      if (eachVal.id === id) {
        todo
      }
    }) */ 

  }

  const deleteTodo = (id) => {
    setTodos((previous) => previous.filter((todo) => todo.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((previous) => previous.map((previousTodo) => previousTodo.id === id ? {...previousTodo, completed: !previousTodo.completed} : previousTodo ))
  }

  // Local storage function start
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */} 
                <TodoForm />
            </div>

            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App

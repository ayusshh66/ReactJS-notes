
import { ContextProvider } from './Context/Context'
import './App.css'
import { TodoContext } from './Context/Context'
import { useState, useEffect } from 'react'


// import {addTodo} from './Context/Context'
// import {TodoContext,contextProvider, useTodo} from './Context/Index'

//HERE TODO --> THE NEW VALUE WE ARE PUTTING IN INPUT
// TODOS --> OLD VALUE IN THE INPUT TODO


// todos is a property and the addTodo,upadte etc are the methods 


function App() {
  const [todos, setTodos] = useState([])
  // in this the new todo will appear on top with some random unique id by using date.now() and the old one wil be behind and thesea re contained in a array.
  const addTodo = (todo) =>{
    setTodos((prev) => [{id : Date.now(),...todo},...prev])
  }

  // HERE WE NEED TO USE MAP() TO CHECK ALL THE TODO VALUES ID IF THEY MATCH THEN NEW TODO WILL BE ADDED AND NOT THEN PREVIOUS TOOD WILL BE AS REMAINED
  const updateTodo = (id , todo) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id? todo : prevTodo ))
  }

  //HERE WE USED FILTER() CUZ IN THIS THE CONDITION WHICH IS SATISFIED GET ELIMINATED  
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id!==id))
  }

  //CHECKS, UNCHECKS THE TODO, HERE IF WE CHECK OR UNCHECKED IT WILL CHANGE THE VALUE OF COMPLETED IN THE PROPERTY OBJECT TODOS
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id=== id? {...prevTodo,completed : !prevTodo.completed}: prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  },[todos])
  return (
    <>
    <ContextProvider value = {{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </ContextProvider>
    </>
  )
}

export default App

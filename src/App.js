import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './Component/TodoList'
import Header from './Component/Header'

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <TodoList />
      </div>
    </div>
  )
}

export default App

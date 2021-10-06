import React, {useMemo, useState} from 'react'

function Todolist() {
  let [task, setTask] = useState('')

  let [todo, setTodo] = useState([])

  const inputChangeHandler = e => {
    setTask({
      id: todo.length,
      title: e.target.value,
      isCompleted: false,
    })
  }

  const btnHandler = e => {
    e.preventDefault()
    setTodo([...todo, task])
    setTask({title: ''})
  }

  const deleteBtnHandler = itemid => {
    let newTodoList = todo.filter(item => {
      return item.id !== itemid
    })
    setTodo(newTodoList)
  }

  const deleteAllCompletedBtnHandler = () => {
    let newTodoList = todo.filter(item => {
      console.log(item.isCompleted)
      return item.isCompleted === false
    })
    console.log(newTodoList)
    setTodo(newTodoList)
  }

  const isCompletedHandler = itemid => {
    let newTodo1 = todo.filter(item => {
      return item.id === itemid
    })

    let newTodo2 = todo.filter(item => {
      return item.id !== itemid
    })

    newTodo1[0].isCompleted = !newTodo1[0].isCompleted
    let todoData = [...newTodo2, ...newTodo1]
    setTodo(todoData)
    console.log(todoData)
  }

  // not complete
  const markAsAllCompletedBtnHandler = () => {
    let newTodo = todo.filter(item => {
      return (item.isCompleted = true)
    })
    console.log(newTodo)
  }
  // not complete
  const markAsAllInCompletedBtnHandler = () => {
    let newTodo = todo.map(item => {
      return (item.isCompleted = false)
    })
    console.log(newTodo)
  }

  const getStyle = useMemo(flag => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      background: '#f4f4f4',
      textDecoration: flag ? 'line-through' : 'none',
    }
  }, [])
  const btnStyle = useMemo(() => {
    return {
      background: '#ff0000',
      color: '#ffffff',
      cursor: 'pointer',
      border: 'none',
      float: 'right',
      padding: '5px 9px',
    }
  }, [])

  return (
    <div>
      <form onSubmit={btnHandler}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Add Todo... "
            onChange={inputChangeHandler}
            value={task.title}
          />
        </div>
        {/* Creta todo */}
        <button className="btn btn-primary mx-2 mb-4">Add</button>

        {/* delete all Completed todo */}
        <input
          className="btn btn-danger mx-2 mb-4"
          type="button"
          value="DeleteAllCompleted"
          onClick={deleteAllCompletedBtnHandler}
        />
      </form>

      {/* display todo  */}

      {todo.map(item => {
        console.log('Rendering start')
        return (
          <div key={item.id} style={getStyle(item.isCompleted)}>
            <input
              type="checkbox"
              onChange={isCompletedHandler.bind(this, item.id)}
            />{' '}
            {item.title}
            {/* edit todos */}
            {/* delete a single todo */}
            <input
              type="button"
              value="X"
              onClick={deleteBtnHandler.bind(this, item.id)}
              style={btnStyle()}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Todolist

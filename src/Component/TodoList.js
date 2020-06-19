import React, { useState } from "react";

function Todolist() {
  let [task, setTask] = useState("");

  let [todo, setTodo] = useState([]);

  const inputChangeHandler = (e) => {
    setTask({
      id: todo.length,
      title: e.target.value,
      isCompleted: false,
    });
  };

  const btnHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask({ title: "" });
  };

  const deleteBtnHandler = (itemid) => {
    let newTodoList = todo.filter((item) => {
      return item.id !== itemid;
    });
    setTodo(newTodoList);
  };

  const deleteAllCompletedBtnHandler = () => {
    let newTodoList = todo.filter((item) => {
      console.log(item.isCompleted);
      return item.isCompleted === false;
    });
    console.log(newTodoList);
    setTodo(newTodoList);
  };

  const isCompletedHandler = (itemid) => {
    let newTodo1 = todo.filter((item) => {
      return item.id === itemid;
    });

    let newTodo2 = todo.filter((item) => {
      return item.id !== itemid;
    });

    newTodo1[0].isCompleted = !newTodo1[0].isCompleted;
    let todoData = [...newTodo2, ...newTodo1];
    setTodo(todoData);
    console.log(todoData);
  };

  // not complete
  const markAsAllCompletedBtnHandler = () => {
    let newTodo = todo.filter((item) => {
      return (item.isCompleted = true);
    });
    console.log(newTodo);
  };
  // not complete
  const markAsAllInCompletedBtnHandler = () => {
    let newTodo = todo.map((item) => {
      return (item.isCompleted = false);
    });
    console.log(newTodo);
  };

  // const editBtnHandler = (items) => {
  //   let newTodoList = todo.filter((item) => {
  //     return item.id === items.id;
  //   });

  //   let input = document.createElement("input");
  //   input.setAttribute("type", "text");
  //   input.setAttribute("id", items.id);
  //   input.setAttribute("value", items.title);

  //   let targetNode = document.getElementById("root");
  //   targetNode.prepend(input);

  //   let btn = document.getElementById(`${items.id}`);
  //   let updateBtn = document.createElement("input");
  //   updateBtn.setAttribute("type", "button");
  //   // updateBtn.setAttribute("id",items.id);
  //   updateBtn.setAttribute("value", "Update");
  //   targetNode.prepend(updateBtn);
  //   console.log("targetNode", targetNode);
  // };

  //Styling
  const getStyle = (flag) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      background: "#f4f4f4",
      textDecoration: flag ? "line-through" : "none",
    };
  };
  const btnStyle = () => {
    return {
      background: "#ff0000",
      color: "#ffffff",
      cursor: "pointer",
      border: "none",
      float: "right",
      padding: "5px 9px",
    };
  };

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

        {/*(Not complete) mark all as completed */}
        {/* <input
            type="button"
            value="markAsAllCompleted"
            onClick={markAsAllCompletedBtnHandler}
          /> */}

        {/*(Not complete) mark all as Incompleted */}
        {/* <input
          type="button"
          value="markAsAllInCompleted"
          onClick={markAsAllInCompletedBtnHandler}
        /> */}
      </form>

      {/* display todo  */}

      {todo.map((item) => {
        console.log("Rendering start");
        return (
          <div key={item.id} style={getStyle(item.isCompleted)}>
            <input
              type="checkbox"
              onChange={isCompletedHandler.bind(this, item.id)}
            />{" "}
            {item.title}
            {/* edit todos */}
            {/* <input
              type="button"
              value="edit"
              onClick={editBtnHandler.bind(this, item)}
            /> */}
            {/* delete a single todo */}
            <input
              type="button"
              value="X"
              onClick={deleteBtnHandler.bind(this, item.id)}
              style={btnStyle()}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Todolist;

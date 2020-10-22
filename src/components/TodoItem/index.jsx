import React, {useState} from 'react';

import styles from './styles.module.sass';

function TodoItem({text, todo, todos, setTodos}) {

  // the next line is to set a state for the Edit function
  const [editText,setEditText]= useState('');

  // delete handler filters through the Todo list and deletes the todo element with the same id
  const deleteHandler =()=>{
    setTodos(todos.filter(
      element => element.id !== todo.id 
      ))
  }

    // compelete  handler maps the Todo list and if the todo element "is compeleted" state is true then it sets the state to the opposed
  const completeHandler =()=>{
    setTodos(todos.map(item=>{
      if(item.id === todo.id){
        return{
          ...item, completed : !item.completed
        };
      }
        return item;
    }
   ))
  }

    // edit text handler sets the input text to the setEditText so that it could be displayed by edit Handler

  const editTextHandler= (e) =>{
    setEditText(e.target.value);
  };
  const editHandler= (e) =>{
    setTodos(todos.map(item=>{
      if(item.id === todo.id){
        return{
          ...item, text :editText
        };
      }
      return item;
    }
   ))
  };


  return (
    <div className={styles.card}>
      {/* if the todo element "is compeleted" state is true then displays it with the compeleted UI, if it's false then displays it with the compeleted UI */}
      <h2 className={todo.completed? styles.completed : styles.title}>{text}</h2>
      <button 
      onClick={completeHandler}
      className={styles.completeBtn}
      >Complete</button>
      <button
      className={styles.deleteBtn}
      onClick={deleteHandler}
      >Delete</button>

      <input
        value={editText}
        type="text"
        placeholder="change todo"
        className={styles.input}
        onChange={editTextHandler}
      />

<button
      className={styles.editBtn}
      onClick={editHandler}
      >Edit</button>

    </div>
  );
}

export default TodoItem;

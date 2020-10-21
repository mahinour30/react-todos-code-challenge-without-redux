import React, {useState} from 'react';

import styles from './styles.module.sass';

function TodoItem({text, todo, todos, setTodos}) {
  const [editText,setEditText]= useState('');
  const deleteHandler =()=>{
    setTodos(todos.filter(
      element => element.id !== todo.id 
      ))
  }

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
  const editTextHandler= (e) =>{
    setEditText(e.target.value);
    const val = e.target.value;
  };
  const editHandler= (e) =>{
    setTodos(todos.map(item=>{
      if(item.id === todo.id){
        return{
          ...item, text :editText
        };
      }
    }
   ))
  };


  return (
    <div className={styles.card}>
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

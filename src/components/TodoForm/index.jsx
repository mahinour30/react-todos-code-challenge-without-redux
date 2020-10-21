import React from 'react';

import styles from './styles.module.sass';

function TodoForm({setInputText, todos, setTodos, inputText}) {
  const inputTextHandler= (e) =>{
    setInputText(e.target.value);
  };

  const submitTodoHandler =(e)=>{
    e.preventDefault();
    setTodos([...todos, {
      text: inputText,
      completed: false,
      id:Math.random()*1000
    }])
    setInputText('');
  };

  return (
    <form>
        <input
        value={inputText}
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        onChange={inputTextHandler}
      />
      <button
      onClick ={submitTodoHandler}
       className={styles.todoBtn} 
       type='submit'
       >
         +<i className="fas fa-plus-square"></i>
       </button>


      
    </form>
  );
}

export default TodoForm;

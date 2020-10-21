import React from 'react';
import TodoItem from '../TodoItem';

function TodoList({todos, setTodos}) {
  return (
    <div>
      {todos.map(todo=>(
        <TodoItem 
        key ={todo.id}
        text={todo.text}
        todos={todos} 
        setTodos={setTodos}
        todo={todo}
        />
      ))}
    </div>
  );
}

export default TodoList;

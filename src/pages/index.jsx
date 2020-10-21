import React, {useState} from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function IndexPage() {

  // the next line is to set a state for the input text comming from the user to create a todo item 
  const [inputText,setInputText]= useState('');
  // the next line is to set a state for the todo list
  const [todos, setTodos] = useState([]);
  return (
    <main>
      <Header />
      <ContentContainer>
        <TodoForm 
        inputText ={inputText}
        todos={todos} 
        setTodos={setTodos}
        setInputText={setInputText} />
        <TodoList 
         todos={todos} 
         setTodos={setTodos}
         />
      </ContentContainer>
    </main>
  );
}

export default IndexPage;

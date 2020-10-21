import React, {useState} from 'react';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function IndexPage() {
  const [inputText,setInputText]= useState('');
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

import React, { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);


  const addItem = () => {
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  const handleRemove = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <main className='main'>
    
      <input
        type='text'
        className='input'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyUp={handleKeyDown}
        placeholder='할일을 적어주세요!'
      />
      <button onClick={addItem}>추가</button>
     
      <TodoBoard todoList={todoList} onRemove={handleRemove}/>
   
    </main>
  );
}

export default App;

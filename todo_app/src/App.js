import React, { useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // console.log(input);
  
  const addTodo = (event) => {

    event.preventDefault(); //will stop refresh
    // console.log('I am working');
    setTodos([...todos, input])
    setInput(''); //clear up the input after clicking add toto button
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>        
        <FormControl>
          <InputLabel>write a Todo</InputLabel>
          <Input  value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>


        <Button disabled = {!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

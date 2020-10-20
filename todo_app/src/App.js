import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // console.log(input);

  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  
  const addTodo = (event) => {

    event.preventDefault(); //will stop refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    
    setTodos([...todos, input])
    setInput(''); //clear up the input after clicking add toto button
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>        
        <FormControl>
          <InputLabel>🛸️Write a Todo</InputLabel>
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

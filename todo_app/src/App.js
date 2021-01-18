import React,{ useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app loads 
    db.collection('todos').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))})}, []);
  const addTodo = (event) => {
    // this will is fire off when click button
    event.preventDefault(); // I will stop refresh
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
          <FormControl>
                <InputLabel>Write a Todo</InputLabel>
                <Input value = {input} onChange = {event =>setInput(event.target.value)}/>
          </FormControl>
          <Button disabled = {!input} type = "submit" onClick = {addTodo} variant="contained" color="primary">Add Todo</Button>
          {/*<button type = "submit" onClick = {addTodo}>Add Todo</button>*/}
      </form>
      <ul>
      {todos.map(todo => (
        <Todo text = {todo}/>
        // <li>{todo}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;

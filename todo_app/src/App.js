import React,{useState} from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState(['Mango', 'Apple', 'Banana']);
  const [input, setInput] = useState('');
  const addTodo = (event) => {
    // this will is fire off when click button
    event.preventDefault(); // I will stop refresh
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }
  return (
    <div className="App">
      <h1>I love You Meri Meenal</h1>
      <form>
          <input value = {input} onChange = {event =>setInput(event.target.value)}/>
          <button type = "submit" onClick = {addTodo}>Add Todo</button>
      </form>
      <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;

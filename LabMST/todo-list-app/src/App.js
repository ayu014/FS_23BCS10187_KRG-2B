import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Add a new task
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  // Mark a task as completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Todo List App</h1>
      </div>
      
      <form onSubmit={addTodo} style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ 
            flexGrow: 1, 
            padding: '8px', 
            border: '1px solid #ccc', 
            borderRadius: '4px 0 0 4px' 
          }}
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          style={{ 
            background: '#4a90e2', 
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '0 4px 4px 0', 
            cursor: 'pointer' 
          }}
        >
          Add
        </button>
      </form>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span 
                style={{ 
                  marginLeft: '8px',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : '#000'
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ 
                background: 'none',
                border: 'none',
                color: '#e74c3c',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>No tasks added yet!</p>
      )}
    </div>
  );
}

export default App;

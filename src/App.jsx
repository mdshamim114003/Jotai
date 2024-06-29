import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from './components/TextField';
import List from './components/List';
import Test from './components/Test';

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className='p-14'>
      <div className='text-blue-500 text-3xl '>James's Simple todo list</div>
      <TextField />
      <List />
      {/* <Test /> */}
    </div>
  )
}

export default App

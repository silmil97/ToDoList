import './App.css';
import { NewTask } from './components/NewTask';
import { ToDoList } from './components/TaskList'

function App() {
  return (
    <div className='Todo-App'>
      <h1>Todo app</h1>
      <NewTask />
    </div>
  );
}

export default App;

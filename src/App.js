import TodoEnty from './components/TodoEnty';
import TodoItems from './components/TodoItems';
import TodoNavigate from './components/TodoNavigate'
import './App.css';


function App() {
  return (
    <div className="todoapp">
<TodoEnty></TodoEnty>
<TodoItems></TodoItems>
<TodoNavigate></TodoNavigate>
    </div>
  );
}

export default App;

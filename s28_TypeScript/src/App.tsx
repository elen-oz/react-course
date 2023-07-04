import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('learn React'), new Todo('learn TypeScript')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;

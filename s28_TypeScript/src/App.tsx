import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['learn react', 'learn typescript']} />
    </div>
  );
}

export default App;

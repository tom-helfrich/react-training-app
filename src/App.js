import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text='Learn React' />
      <Todo text='Get better at FE' />
      <Todo text='Become full stack engineer' />
    </div>
  );
}

export default App;

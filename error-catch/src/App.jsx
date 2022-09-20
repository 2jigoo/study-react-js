import './App.css'
import ErrorBoundary from './ErrorBoundary';
import User from './User';

function App() {
  const user = {
    id: 1,
    username: '2jigoo'
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <User  />
      </ErrorBoundary>
    </div>
  )
}

export default App

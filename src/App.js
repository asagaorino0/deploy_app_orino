import './App.css';
import Button from 'react-bootstrap/Button'

function App() {
  const Click = () => {
    alert('Hello world');
    console.log('Hello world')
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button onClick={Click}>押して!</Button>{' '}
        </p>
      </header>
    </div>
  );
}

export default App;

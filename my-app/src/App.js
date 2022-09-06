import logo from './logo.svg';
import './App.css';
import RouterReader from './components/RouterReader/RouterReader';
import APICaller from './components/APICaller/APICaller';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <APICaller/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './layout/header'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <header className="App-header">
        <div className="App-left"></div>
        <div className="App-right">

        </div>
       
      </header>
      </Router>
    </div>
  );
}

export default App;

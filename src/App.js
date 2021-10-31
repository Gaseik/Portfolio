import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './layout/header'
import Home from './pages/home'
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Home/>
      </Router>
    </div>
  );
}

export default App;

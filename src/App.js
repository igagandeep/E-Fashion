import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div className="app">    
            <Header />
            <Switch>
              <Route path="/" component={Home} /> 
            </Switch>
      </div>  
     </Router>
  );
}

export default App;

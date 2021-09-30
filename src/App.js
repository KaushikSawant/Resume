import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Api from './Api';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
    return (
            <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Api" component={Api} />
            </Switch>
            </Router>
  );
}

export default App;

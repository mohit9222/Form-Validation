import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import FormSuccess from './components/FormSuccess'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Form} />
            <Route path="/FormSuccess" component={FormSuccess} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

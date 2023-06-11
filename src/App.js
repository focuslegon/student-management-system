import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Homepage from './components/Homepage';
import Dashboard from './components/user/Dashboard';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
      </Switch>
    </div>
  </Router>
  );
}

export default App;

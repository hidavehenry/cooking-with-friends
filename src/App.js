import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="Login">
          <Login />
        </Route>
        <Route path="Signup">
          <Signup />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

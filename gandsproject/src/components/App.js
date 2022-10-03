// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Favorites from './Favorites';
import Home from './Home';
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

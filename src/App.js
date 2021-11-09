import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
         </Router>
    </div>
  );
}

export default App;

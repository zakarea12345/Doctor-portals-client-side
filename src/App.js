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
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
       <Router>
         <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
         </Router>
    </AuthProvider>
  );
}

export default App;

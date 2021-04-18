import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import LoginContextProvider from "./components/Login Components/LoginContextProvider/LoginContextProvider";
import BookNow from "./pages/Book Now/BookNow";
import PrivateRoute from "./components/Login Components/Private Route/PrivateRoute";

function App() {
  return (
    <LoginContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/bookService/:id">
            <BookNow></BookNow>
          </PrivateRoute>
        </Switch>
      </Router>
    </LoginContextProvider>
  );
}

export default App;

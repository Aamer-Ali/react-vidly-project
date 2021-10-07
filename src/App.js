import "./App.css";
import Movie from "./components/movies";
import NavBar from "./components/navbar";
import jwtDecode from "jwt-decode";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/notfound";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import React from "react";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";

class App extends React.Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <div className="container">
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/movies/:id" component={MovieForm} />
              <Route path="/movies" component={Movie} />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Redirect from="/" exact to="/movies" />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

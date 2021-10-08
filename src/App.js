import "./App.css";
import Movie from "./components/movies";
import NavBar from "./components/navbar";
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
import auth from "./services/authService";

class App extends React.Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
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
              {/* <Route path="/movies" component={Movie} />  */}
              {/* Want to pass the pops with url the use method below*/}
              <Route
                path="/movies"
                render={(props) => <Movie {...props} user={this.state.user} />}
              />

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

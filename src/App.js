import "./App.css";
import Movie from "./components/movies";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notfound";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import React from "react";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
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

export default App;

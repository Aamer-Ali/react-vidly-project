import React from "react";
import auth from "../../services/authService";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { path, component: Component, render, ...rest } = props;
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        // if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        //For redirecting after login follwoing code is used.
        //Will use object for "to" property in Redirect Tag instead of string
        if (!auth.getCurrentUser())
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;

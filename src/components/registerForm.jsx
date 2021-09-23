import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    //server Call
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          <br />
          {this.renderInput("password", "Password", "password")}
          <br />
          {this.renderInput("name", "Name")}
          <br />
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, option);

    const { error } = result;
    if (!error) return null;
    const errors = {};
    result.error.details.map(
      (detail) => (errors[detail.path[0]] = detail.message)
    );

    // for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
    // if (!error) return null;

    // const errors = {};

    // const errors = {};
    // const { account } = this.state;

    // if (account.username.trim() === "")
    //   errors.username = "Username is required";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    //server Call
    console.log("Submitted");
  };

  // handleChange = (e) => {

  //   const errors = {...this.state.errors};
  //   const errorMessage = this.validate(input)

  //   const account = { ...this.state.account };
  //   account[e.currentTarget.name] = e.currentTarget.value;
  //   this.setState({ account });
  // };

  validateProperty = (input) => {
    const { name, value } = input;
    // if (input.name === "username") {
    //   if (input.value.trim() === "") return "Username is required";
    //   //....
    // }
    // if (input.name === "password") {
    //   if (input.value.trim() === "") return "Password is required";
    //   //....
    // }
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <br />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <br />
          <button className="btn btn-primary" disabled={this.validate()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, option);

    const { error } = result;
    if (!error) return null;
    const errors = {};
    result.error.details.map(
      (detail) => (errors[detail.path[0]] = detail.message)
    );
    return errors;

    // for (let item of error.details) errors[item.path[0]] = item.message;

    // if (!error) return null;
    // const errors = {};
    // const errors = {};
    // const { data } = this.state;
    // if (data.username.trim() === "")
    //   errors.username = "Username is required";
    // if (data.password.trim() === "")
    //   errors.password = "Password is required";
    // return Object.keys(errors).length === 0 ? null : errors;
  };

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

  // handleChange = (e) => {
  //   const errors = {...this.state.errors};
  //   const errorMessage = this.validate(input)
  //   const data = { ...this.state.data };
  //   data[e.currentTarget.name] = e.currentTarget.value;
  //   this.setState({ data });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        type={type}
        error={errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        options={options}
        error={errors[name]}
      />
    );
  }
}

export default Form;

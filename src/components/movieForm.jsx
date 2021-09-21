import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form Page Id : {this.props.match.params.id}</h1>
        <button className="btn btn-success btn-sm" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;

import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlbum } from "../actions/albums";

class CreateAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const albumName = this.state.value;
    this.props.createAlbum(albumName, this.props.history);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Create New Album</label>
        <input type="text" onChange={this.handleChange} />
        <button type="submit" value="Submit">
          Create
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { createAlbum }
)(CreateAlbum);

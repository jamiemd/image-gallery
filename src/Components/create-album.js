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
      <div style={createAlbumContainer}>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <div style={formLabelContainer}>
            <label>Create New Album</label>
          </div>
          <input style={inputStyle} type="text" onChange={this.handleChange} />
          <button style={buttonSubmit} type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const createAlbumContainer = {
  display: "flex",
  justifyContent: "center"
};

const formStyle = {
  marginBottom: "50px",
  fontSize: "16px"
};

const formLabelContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "10px"
};

const inputStyle = {
  width: "300px",
  height: "31px",
  border: "none",
  borderBottom: "1px solid gray",
  fontSize: "18px",
  paddingTop: "5px",
  paddingBottom: "5px",
  backgroundColor: "#EDF1F3"
};

const buttonSubmit = {
  paddingTop: "1px",
  border: "none",
  border: ".5px solid gray",
  padding: "10px 12px",
  fontSize: "15px"
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { createAlbum }
)(CreateAlbum);

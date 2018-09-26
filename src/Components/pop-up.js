import React, { Component } from "react";
import { connect } from "react-redux";
import { findAlbum, popupToggle } from "../actions/albums";

class Popup extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle = () => {
    this.props.popupToggle();
  };

  handleDelete = () => {
    this.props.popupToggle();
  };

  render() {
    return (
      <div style={popUpContainer}>
        <div style={popup}>
          <div>Delete this image?</div>
          <button onClick={this.handleToggle}>Cancel</button>
          <button onClick={this.handleDelete}>Yes</button>
        </div>
      </div>
    );
  }
}

const popUpContainer = {
  borderRadius: "12px",
  width: "300px",
  backgroundColor: "red"
};

const popup = {
  width: "200px",
  height: "100px"
};

const mapStateToProps = state => {
  console.log("state", state);
  return {};
};

export default connect(
  mapStateToProps,
  { findAlbum, popupToggle }
)(Popup);

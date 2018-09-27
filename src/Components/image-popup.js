import React, { Component } from "react";
import { connect } from "react-redux";
import { showImagePopup } from "../actions/albums";

class ImagePopup extends Component {
  constructor(props) {
    super(props);
  }

  handleClosePopup = () => {
    this.props.showImagePopup();
  };

  handleDelete = imageToDelete => {
    console.log("imageId in popup delete", imageToDelete);
    this.props.showImagePopup();
  };

  render() {
    return (
      <div style={popUpContainer}>
        <button onClick={this.handleClosePopup}>X</button>
        <div>
          <img src={this.props.imageToShow} />
        </div>
      </div>
    );
  }
}

const popUpContainer = {
  borderRadius: "12px",
  backgroundColor: "white",
  maxWidth: "500px",
  maxHeight: "500px"
};

const mapStateToProps = state => {
  console.log("state in popup", state);
  return {
    imageToShow: state.imageToShow
  };
};

export default connect(
  mapStateToProps,
  { showImagePopup }
)(ImagePopup);

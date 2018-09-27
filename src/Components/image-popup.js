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
      <div style={popupContainer}>
        <div style={imageContainer}>
          <div style={buttonStyle} onClick={this.handleClosePopup}>
            &times;
          </div>
          <div>
            <img src={this.props.imageToShow} />
          </div>
        </div>
      </div>
    );
  }
}

const popupContainer = {
  zIndex: "1",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)",
  position: "fixed",
  height: "100%",
  width: "100%",
  left: "0",
  top: "0",
  display: "flex"
};

const imageContainer = {
  maxWidth: "1000px",
  maxHeight: "1000px",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingBottom: "15px",
  backgroundColor: "white",
  margin: "auto"
};

const buttonStyle = {
  float: "right",
  fontSize: "30px"
};

const mapStateToProps = state => {
  return {
    imageToShow: state.imageToShow
  };
};

export default connect(
  mapStateToProps,
  { showImagePopup }
)(ImagePopup);

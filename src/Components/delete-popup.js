import React, { Component } from "react";
import { connect } from "react-redux";
import { showDeletePopup, deleteImage } from "../actions/albums";

class DeletePopup extends Component {
  constructor(props) {
    super(props);
  }

  handleDeletePopup = () => {
    this.props.showDeletePopup();
  };

  handleDelete = imageToDelete => {
    console.log("imageId in popup delete", imageToDelete);
    this.props.showDeletePopup();
    this.props.deleteImage(imageToDelete);
  };

  render() {
    return (
      <div style={popupContainer}>
        <div style={popupBox}>
          <div style={text}>Delete image?</div>
          <div style={buttonContainer}>
            <button style={buttonStyle} onClick={this.handleDeletePopup}>
              Cancel
            </button>
            <button
              style={buttonStyle}
              onClick={() => this.handleDelete(this.props.imageToDelete)}
            >
              Yes
            </button>
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

const popupBox = {
  width: "400px",
  height: "200px",
  backgroundColor: "white",
  margin: "auto"
};

const buttonContainer = {
  display: "flex",
  justifyContent: "space-around"
};

const buttonStyle = {
  border: ".5px solid",
  fontSize: "16px",
  padding: "5px",
  width: "100px",
  height: "40px"
};

const text = {
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "40px",
  fontSize: "25px"
};

const mapStateToProps = state => {
  console.log("state in popup", state);
  return {
    imageToDelete: state.imageToDelete
  };
};

export default connect(
  mapStateToProps,
  { showDeletePopup, deleteImage }
)(DeletePopup);

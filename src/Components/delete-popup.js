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
      <div style={popUpContainer}>
        <div>
          <div>Delete this image?</div>
          <button onClick={this.handleDeletePopup}>Cancel</button>
          <button onClick={() => this.handleDelete(this.props.imageToDelete)}>
            Yes
          </button>
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
  console.log("state in popup", state);
  return {
    imageToDelete: state.imageToDelete
  };
};

export default connect(
  mapStateToProps,
  { showDeletePopup, deleteImage }
)(DeletePopup);

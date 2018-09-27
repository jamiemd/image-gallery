import React, { Component } from "react";
import { connect } from "react-redux";
import {
  showDeleteAlbumPopup,
  showDeleteImagePopup,
  deleteImage,
  deleteAlbum
} from "../actions/albums";

class DeletePopup extends Component {
  constructor(props) {
    super(props);
  }

  handleDeleteAlbumCancel = () => {
    this.props.showDeleteAlbumPopup();
  };

  handleDeleteImageCancel = () => {
    this.props.showDeleteImagePopup();
  };

  handleDeleteAlbumClick = albumId => {
    this.props.showDeleteAlbumPopup();
    this.props.deleteAlbum(albumId);
  };

  handleDeleteImageClick = (imageToDeleteId, albumId) => {
    this.props.showDeleteImagePopup();
    this.props.deleteImage(imageToDeleteId, albumId);
  };

  render() {
    return (
      <div style={popupContainer}>
        <div style={popupBox}>
          {this.props.showDeleteAlbumPopupBool ? (
            <div>
              <div style={text}>Delete Album?</div>
              <div style={buttonContainer}>
                <button
                  style={buttonStyle}
                  onClick={this.handleDeleteAlbumCancel}
                >
                  Cancel
                </button>
                <button
                  style={buttonStyle}
                  onClick={() =>
                    this.handleDeleteAlbumClick(this.props.albumId)
                  }
                >
                  Yes
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div style={text}>Delete Image?</div>
              <div style={buttonContainer}>
                <button
                  style={buttonStyle}
                  onClick={this.handleDeleteImageCancel}
                >
                  Cancel
                </button>
                <button
                  style={buttonStyle}
                  onClick={() =>
                    this.handleDeleteImageClick(
                      this.props.imageToDeleteId,
                      this.props.albumId
                    )
                  }
                >
                  Yes
                </button>
              </div>
            </div>
          )}
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
  console.log("state in delete", state);
  return {
    albumId: state.album._id,
    imageToDeleteId: state.imageToDeleteId,
    albumToDeleteId: state.albumToDeleteId,
    showDeleteAlbumPopupBool: state.showDeleteAlbumPopupBool
  };
};

export default connect(
  mapStateToProps,
  { showDeleteAlbumPopup, showDeleteImagePopup, deleteImage, deleteAlbum }
)(DeletePopup);

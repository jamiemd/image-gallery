// @flow
import React, { Component } from "react";
import { styled } from "fusion-plugin-styletron-react";
import { findAlbum, showDeletePopup, showImagePopup } from "../actions/albums";
import { connect } from "react-redux";
import { Router, Route, Link } from "fusion-plugin-react-router";
import AddImage from "../Components/add-image";
import DeletePopup from "../Components/delete-popup";
import ImagePopup from "../Components/image-popup";

class Album extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.findAlbum(albumId);
  }

  handleDeleteClick = imageToDelete => {
    this.props.showDeletePopup(imageToDelete);
  };

  handleImagePopup = imageToExpand => {
    this.props.showImagePopup(imageToExpand);
  };

  render() {
    return (
      <div style={albumContainer}>
        <div>{this.props.showDeletePopupBool ? <DeletePopup /> : null}</div>
        <div>{this.props.showImagePopupBool ? <ImagePopup /> : null}</div>
        <Link style={homeLink} to="/">
          Home
        </Link>
        <div style={albumName}>{this.props.album.name}</div>
        <AddImage albumId={this.props.match.params.id} />
        <div style={imagesBox}>
          <div style={imagesContainer}>
            {this.props.album.images.map((image, i) => (
              <div key={i}>
                <button
                  style={removeImage}
                  onClick={() => this.handleDeleteClick(image._id)}
                >
                  &times;
                </button>
                <div
                  onClick={() => this.handleImagePopup(image.imagePreviewUrl)}
                >
                  <img style={imageContainer} src={image.imagePreviewUrl} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const albumContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  width: "80%",
  margin: "auto",
  paddingTop: "20px"
};

const imagesBox = {
  justifyContent: "center",
  marginTop: "40px"
};

const imagesContainer = {
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(4, 300px)",
  justifyContent: "space-around"
};

const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px",
  backgroundColor: "#F0F0F0"
};

const homeLink = {
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "600"
};

const albumName = {
  fontSize: "25px",
  textAlign: "center",
  fontWeight: "500"
};

const removeImage = {};

const mapStateToProps = state => {
  return {
    album: state.album || { images: [] },
    showDeletePopupBool: state.showDeletePopupBool,
    showImagePopupBool: state.showImagePopupBool
  };
};

export default connect(
  mapStateToProps,
  { findAlbum, showDeletePopup, showImagePopup }
)(Album);

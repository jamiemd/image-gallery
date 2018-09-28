// @flow
import React, { Component } from "react";
import { Redirect } from "fusion-plugin-react-router";
import {
  findAlbum,
  showDeleteAlbumPopup,
  showDeleteImagePopup,
  showImagePopup
} from "../actions/albums";
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

  handleDeleteAlbumClick = albumToDelete => {
    this.props.showDeleteAlbumPopup(albumToDelete);
  };

  handleDeleteImageClick = imageToDelete => {
    this.props.showDeleteImagePopup(imageToDelete);
  };

  handleImagePopupClick = imageToExpand => {
    this.props.showImagePopup(imageToExpand);
  };

  render() {
    return (
      <div>
        {this.props.redirectToHome ? (
          <Redirect to="/" />
        ) : (
          <div style={albumContainer}>
            <div>
              {this.props.showDeleteAlbumPopupBool ? <DeletePopup /> : null}
            </div>
            <div>
              {this.props.showDeleteImagePopupBool ? <DeletePopup /> : null}
            </div>
            <div>{this.props.showImagePopupBool ? <ImagePopup /> : null}</div>
            <Link style={homeLink} to="/">
              Home
            </Link>
            <div style={titleContainer}>
              <div style={albumName}>{this.props.album.name}</div>
              <div
                style={deleteAlbumButton}
                onClick={() =>
                  this.handleDeleteAlbumClick(this.props.album._id)
                }
              >
                &times;
              </div>
            </div>
            <AddImage albumId={this.props.match.params.id} />
            <div style={imagesBox}>
              <div style={imagesContainer}>
                {this.props.album.images.map((image, i) => (
                  <div key={i}>
                    <button
                      onClick={() => this.handleDeleteImageClick(image._id)}
                    >
                      &times;
                    </button>
                    <div
                      onClick={() =>
                        this.handleImagePopupClick(image.imagePreviewUrl)
                      }
                    >
                      <img style={imageContainer} src={image.imagePreviewUrl} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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

const titleContainer = {
  display: "flex",
  justifyContent: "center"
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

const deleteAlbumButton = {
  paddingLeft: "20px"
};

const mapStateToProps = state => {
  console.log("state in album", state);
  return {
    album: state.album || { images: [] },
    showDeleteAlbumPopupBool: state.showDeleteAlbumPopupBool,
    showDeleteImagePopupBool: state.showDeleteImagePopupBool,
    showImagePopupBool: state.showImagePopupBool,
    redirectToHome: state.redirectToHome
  };
};

export default connect(
  mapStateToProps,
  { findAlbum, showDeleteAlbumPopup, showDeleteImagePopup, showImagePopup }
)(Album);

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
    if (this.props.album._id !== this.props.match.params.id) {
      return null;
    } else {
      return (
        <div>
          {this.props.redirectToHome ? (
            <Redirect to="/" />
          ) : (
            <div style={albumPageContainer}>
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
                <button
                  style={buttonStyle}
                  onClick={() =>
                    this.handleDeleteAlbumClick(this.props.album._id)
                  }
                >
                  <img
                    style={iconStyle}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGsSURBVGhD7dq/K0VxGMfxm19FoSQpm4lB2FHKRBJlMtiUxWJAFpuN7Fb/gQmLVVlMFoVsiuRHIT/eT91vPenp3HM7v255PvVa7nPP934/0b3nnnNLKWUGJ3jBTwyfOMcKGlAT2YK12biO0IhCM4pvWBusxhoKzT70hr5wh6sI13iHPu4SheYCekNjiJMOPEAf245M0oZJzEe4h97MAqznWeSvo49dhvU8MYseVJ1W/H2hor1iGLHSjSXswFqsaIeQ/Q0hMiOwFqg164iMF8lZxSKdsN41ak0f/memcVwDNpAo8iFl/Y/m7QCJ4kVS5kVCKhV5gpzFisfyY8EHwky8Qc+foefyFUDPtcyLDCBETsP1TM6LdORDTM+noHMDPde8SIgXgRcxeJEQLwIvYvAiIV4EXsTgRUK8CLyIwYuEeBF4EYMXCalUZBXhCvli+bFAfhCgr6DLZvR8G3r+936klnmRvHiRkDlYC+dtF4kid7Dk0qe1eJ7kfn/i7MFaPC9nqEPiNOMU1otk7Ra9SC1N2ETUW2Sa5Mq9/GCnC5mkHv0Yx0RGBtGCKlIq/QI+C+St9GvhtAAAAABJRU5ErkJggg=="
                  />
                </button>
              </div>
              <AddImage albumId={this.props.match.params.id} />
              <div style={imagesContainer}>
                {this.props.album.images.map((image, i) => (
                  <div style={mainImageContainer} key={i}>
                    <div
                      style={imageContainer}
                      onClick={() =>
                        this.handleImagePopupClick(image.imagePreviewUrl)
                      }
                    >
                      <img style={imagePreview} src={image.imagePreviewUrl} />
                    </div>
                    <div style={buttonContainer}>
                      <button
                        style={buttonStyle}
                        onClick={() => this.handleDeleteImageClick(image._id)}
                      >
                        <img
                          style={iconStyle}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGsSURBVGhD7dq/K0VxGMfxm19FoSQpm4lB2FHKRBJlMtiUxWJAFpuN7Fb/gQmLVVlMFoVsiuRHIT/eT91vPenp3HM7v255PvVa7nPP934/0b3nnnNLKWUGJ3jBTwyfOMcKGlAT2YK12biO0IhCM4pvWBusxhoKzT70hr5wh6sI13iHPu4SheYCekNjiJMOPEAf245M0oZJzEe4h97MAqznWeSvo49dhvU8MYseVJ1W/H2hor1iGLHSjSXswFqsaIeQ/Q0hMiOwFqg164iMF8lZxSKdsN41ak0f/memcVwDNpAo8iFl/Y/m7QCJ4kVS5kVCKhV5gpzFisfyY8EHwky8Qc+foefyFUDPtcyLDCBETsP1TM6LdORDTM+noHMDPde8SIgXgRcxeJEQLwIvYvAiIV4EXsTgRUK8CLyIwYuEeBF4EYMXCalUZBXhCvli+bFAfhCgr6DLZvR8G3r+936klnmRvHiRkDlYC+dtF4kid7Dk0qe1eJ7kfn/i7MFaPC9nqEPiNOMU1otk7Ra9SC1N2ETUW2Sa5Mq9/GCnC5mkHv0Yx0RGBtGCKlIq/QI+C+St9GvhtAAAAABJRU5ErkJggg=="
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

const albumPageContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  paddingTop: "20px"
};

const homeLink = {
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "600",
  paddingLeft: "100px"
};

const titleContainer = {
  display: "flex",
  justifyContent: "center",
  margin: "40px"
};

const albumName = {
  fontSize: "25px",
  textAlign: "center",
  fontWeight: "500"
};

const imagesContainer = {
  margin: "5px",
  display: "grid",
  gridTemplateColumns: "repeat(5, 280px)",
  justifyContent: "center"
};

const mainImageContainer = {
  border: "1px solid",
  margin: "10px",
  width: "250px",
  height: "250px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  alignContent: "space-between"
};

const imageContainer = {
  width: "250px",
  height: "210px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#EDF1F3"
};

const imagePreview = {
  maxWidth: "250px",
  maxHeight: "210px",
  alignSelf: "center"
};

const buttonContainer = {
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "5px"
};

const buttonStyle = {
  border: "none",
  paddingTop: "5px",
  paddingLeft: "20px"
};

const iconStyle = {
  width: "15px",
  height: "15px",
  border: "none",
  alignSelf: "right"
};

const mapStateToProps = state => {
  console.log("state", state);
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

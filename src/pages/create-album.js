import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlbum } from "../actions/albums";

class CreateAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleUpload = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  handleSave = event => {
    event.preventDefault();
    const name = this.props.albumName;
    const images = {
      file: this.state.file,
      imagePreviewUrl: this.state.imagePreviewUrl
    };
    this.props.createAlbum(name, images);
  };

  render() {
    return (
      <div>
        <form>
          <div>{this.props.albumName}</div>
          <input type="file" onChange={e => this.handleUpload(e)} />
          <button onClick={this.handleSave}>Save</button>
        </form>
        <div className="example__images-container">
          <div className="example__images">{}</div>
        </div>
        <img src={this.state.imagePreviewUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albumName: state.albumName
  };
};

export default connect(
  mapStateToProps,
  { createAlbum }
)(CreateAlbum);

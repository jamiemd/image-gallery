import React, { Component } from "react";
import { connect } from "react-redux";

class CreateAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filesArray: [],
      imagePreviewUrlArray: []
    };
  }

  handleUpload = event => {
    const reader = new FileReader();
    console.log("event.target.files", event.target.files);
    let files = event.target.files;
    console.log("file", files);

    reader.readAsDataURL(file);
  };

  f;
  handleSave = () => {
    console.log("saved");
  };

  render() {
    return (
      <div>
        <form>
          <div>{this.props.albumName}</div>
          <input type="file" onChange={e => this.handleUpload(e)} multiple />
          <button onClick={this.handleSave}>Save</button>
        </form>
        <div className="example__images-container">
          <div className="example__images">{}</div>
        </div>
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
  {}
)(CreateAlbum);

import React, { Component } from "react";
import { connect } from "react-redux";
import { addImage } from "../actions/albums";

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }

  handleUpload = event => {
    console.log("event.target.files", event.target.files);

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file.name,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  handleSubmit = event => {
    event.preventDefault();
    const image = {
      file: this.state.file,
      imagePreviewUrl: this.state.imagePreviewUrl
    };
    this.props.addImage(image, this.props.albumId);
  };

  render() {
    return (
      <div>
        <label>Add Image</label>
        <form onSubmit={this.handleSubmit}>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={e => this.handleUpload(e)}
          />
          <button>Save</button>
        </form>
        <div className="example__images-container">
          <div className="example__images">{}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addImage }
)(AddImage);

import axios from "axios";

export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ALBUM = "GET_ALBUM";
export const CREATE_ALBUM = "CREATE_ALBUM";
export const ADD_IMAGES = "ADD_IMAGES";

const ROOT_URL = "http://localhost:3000/api";

// get all albums
export const getAlbums = () => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/getAlbums`)
      .then(res => {
        dispatch({
          type: GET_ALBUMS,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error", error.response);
      });
  };
};

// find album
export const findAlbum = albumId => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/findAlbum/${albumId}`)
      .then(res => {
        dispatch({
          type: GET_ALBUM,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error", error.response);
      });
  };
};

// create album
export const createAlbum = (albumName, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/create-album`, { albumName })
      .then(res => {
        console.log("res in create album", res);
        dispatch({
          type: CREATE_ALBUM,
          payload: res.data
        });
        history.push("/findAlbum/" + res.data.albumId);
      })
      .catch(error => {
        console.log("error.response in create album", error.response);
      });
  };
};

// add images
export const addImages = image => {
  const images = [];
  images.push({
    file: image.file.name,
    imagePreviewUrl: image.imagePreviewUrl
  });
  return dispatch => {
    axios
      .post(`${ROOT_URL}/add-images`, { images })
      .then(res => {
        dispatch({
          type: ADD_IMAGES,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error.response", error.response);
      });
  };
};

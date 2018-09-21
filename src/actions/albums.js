import axios from "axios";

export const GET_ALBUMS = "GET_ALBUMS";
export const CREATE_ALBUM_NAME = "CREATE_ALBUM_NAME";
export const CREATE_ALBUM = "CREATE_ALBUM";

const ROOT_URL = "http://localhost:8000/api";

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

// add album name to pass into create-album page
export const createAlbumName = albumName => {
  return {
    type: CREATE_ALBUM_NAME,
    payload: albumName
  };
};

// create album
export const createAlbum = albumData => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/create-album`)
      .then(res => {
        dispatch({
          type: CREATE_ALBUM,
          payload: res.data
        });
      })
      .catch(error => {
        console.log("error".error.response);
      });
  };
};

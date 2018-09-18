import axios from "axios";

export const GET_ALBUMS = "GET_ALBUMS";

const ROOT_URL = "http://localhost:8000";

export const getAlbums = array => {
  axios
    .get(`${ROOT_URL}/api/albums`)
    .then(res => {
      return {
        type: GET_ALBUMS,
        payload: res
      };
    })
    .catch(error => {
      console.log("error");
    });
};

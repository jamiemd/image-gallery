import {
  GET_ALBUMS,
  GET_ALBUM,
  ADD_IMAGE,
  CREATE_ALBUM,
  SHOW_DELETE_ALBUM_POPUP,
  SHOW_DELETE_IMAGE_POPUP,
  SHOW_IMAGE_POPUP,
  DELETE_ALBUM,
  DELETE_IMAGE
} from "../actions/albums";

export default (state, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload.albums
      };
    case GET_ALBUM:
      return {
        album: action.payload.album
      };
    case CREATE_ALBUM:
      return {
        ...action.payload
      };
    case ADD_IMAGE:
      return {
        ...state,
        ...action.payload
      };
    case SHOW_DELETE_ALBUM_POPUP:
      if (state.showDeleteAlbumPopupBool === true) {
        return {
          ...state,
          showDeleteAlbumPopupBool: false
        };
      } else {
        return {
          ...state,
          showDeleteAlbumPopupBool: true,
          albumToDeleteId: action.payload
        };
      }
    case SHOW_DELETE_IMAGE_POPUP:
      if (state.showDeleteImagePopupBool === true) {
        return {
          ...state,
          showDeleteImagePopupBool: false
        };
      } else {
        return {
          ...state,
          showDeleteImagePopupBool: true,
          imageToDeleteId: action.payload
        };
      }
    case SHOW_IMAGE_POPUP:
      if (state.showImagePopupBool === true) {
        return {
          ...state,
          showImagePopupBool: false
        };
      } else {
        return {
          ...state,
          showImagePopupBool: true,
          imageToShow: action.payload
        };
      }
    case DELETE_ALBUM:
      return {
        ...state,
        redirectToHome: true
      };
    case DELETE_IMAGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

import axios from "axios";

const PLAYLIST_API_BASE_URL = "http://localhost:8080/api/v1/";
class PlaylistServices {
  getPlayLists() {
    return axios.get(PLAYLIST_API_BASE_URL + "playlist");
  }

  createPlayList(playlist) {
    return axios.post(PLAYLIST_API_BASE_URL + "createPlaylist", playlist);
  }
  deletePl(id) {
    return axios.delete(PLAYLIST_API_BASE_URL + "playlist/" + id);
  }
  addSong(song) {
    return axios.post(PLAYLIST_API_BASE_URL + "addSong", song);
  }
  deleteSong(id) {
    return axios.delete(PLAYLIST_API_BASE_URL + "delSong/" + id);
  }
}
export default new PlaylistServices();

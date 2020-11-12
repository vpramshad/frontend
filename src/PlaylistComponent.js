import React, { Component } from "react";
import PlaylistServices from "./services/PlaylistServices";
import "bootstrap/dist/css/bootstrap.min.css";

class Playlistcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
    };
    this.addPlaylist = this.addPlaylist.bind(this);
    this.addSong = this.addSong.bind(this);
    this.deletePl = this.deletePl.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  componentDidMount() {
    PlaylistServices.getPlayLists().then((resp) => {
      console.log(resp);
      this.setState({ playlists: resp.data });
    });
  }
  addPlaylist() {
    this.props.history.push("/createPlaylist");
  }

  addSong(id) {
    this.props.history.push(`/addSong/${id}`);
  }

  deleteSong(songId) {
    PlaylistServices.deleteSong(songId).then((res) => {
      this.setState({ playlists: res.data });
    });
  }

  deletePl(id) {
    PlaylistServices.deletePl(id).then((res) => {
      this.setState({ playlists: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Playlists</h2>
        <div className="row">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Songs</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {this.state.playlists.map((data) => (
                <tr key={data.id}>
                  <td>x{data.plName}</td>
                  <td>
                    <div>
                      {
                        <table>
                          {data.songs.map((song) => (
                            <tr key={song.songIds} width="100%">
                              <td width="20%">{song.songName}</td>
                              <td width="50%">{song.singer}</td>
                              <td width="30%">
                                <div>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                      this.deleteSong(song.songIds)
                                    }
                                  >
                                    Delete Song
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </table>
                      }
                    </div>
                  </td>
                  <td width="30%">
                    <table>
                      <tr>
                        <td width="50%">
                          <button
                            type="button"
                            class="btn btn-light"
                            onClick={() => this.addSong(data.id)}
                          >
                            Add Song
                          </button>
                        </td>
                        <td width="30%">
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => this.deletePl(data.id)}
                          >
                            Delete Playlist
                          </button>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" align="center">
                  <button
                    className="btn btn-primary"
                    onClick={this.addPlaylist}
                  >
                    Add Playlist
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Playlistcomponent;

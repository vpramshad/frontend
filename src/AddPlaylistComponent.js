import React, { Component } from "react";
import PlaylistServices from "./services/PlaylistServices";

export default class Addplaylistcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plName: "",
    };

    this.savePlaylist = this.savePlaylist.bind(this);
    this.cancel = this.cancel.bind(this);
    this.changePlaylistNameHandler = this.changePlaylistNameHandler.bind(this);
  }

  changePlaylistNameHandler = (event) => {
    this.setState({ plName: event.target.value });
  };

  savePlaylist = (pl) => {
    pl.preventDefault();
    let myPlayList = { plName: this.state.plName };
    console.log("plst =>" + JSON.stringify(myPlayList));
    PlaylistServices.createPlayList(myPlayList).then((result) => {
      this.props.history.push("/playlist");
    });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center">Add Playlist</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Playlist Name:</label>
                    <input
                      className="from-control"
                      placeholder="Playlist Name"
                      name="plName"
                      value={this.state.plName}
                      onChange={this.changePlaylistNameHandler}
                    ></input>
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.savePlaylist}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

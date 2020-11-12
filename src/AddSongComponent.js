import { event } from "jquery";
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import PlaylistServices from "./services/PlaylistServices";

export default class Addsongcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plId: this.props.match.params.id,
      name: "",
      singer: "",
    };

    this.saveSong = this.saveSong.bind(this);
    this.cancel = this.cancel.bind(this);
    this.changeSongNameHandler = this.changeSongNameHandler.bind(this);
    this.changeSingerHandler = this.changeSingerHandler.bind(this);
  }

  changeSongNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeSingerHandler = (event) => {
    this.setState({ singer: event.target.value });
  };

  saveSong = (pl) => {
    pl.preventDefault();
    let mySong = {
      plId: this.state.plId,
      name: this.state.name,
      singer: this.state.singer,
    };
    PlaylistServices.addSong(mySong).then((result) => {
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
              <h3 className="text-center">Add Song</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name of the song:</label>
                    <input
                      className="from-control"
                      placeholder="Song"
                      name="name"
                      value={this.state.name}
                      onChange={this.changeSongNameHandler}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Singer:</label>
                    <input
                      className="from-control"
                      placeholder="Singer"
                      name="singer"
                      value={this.state.singer}
                      onChange={this.changeSingerHandler}
                    ></input>
                  </div>

                  <button className="btn btn-success" onClick={this.saveSong}>
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

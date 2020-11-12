import "./App.css";
import React, { useState, useEffect } from "react";
import Playlistcomponent from "./PlaylistComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addplaylistcomponent from "./AddPlaylistComponent";
import Addsongcomponent from "./AddSongComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Playlistcomponent}></Route>
            <Route path="/playlist" component={Playlistcomponent}></Route>
            <Route path="/addSong/:id" component={Addsongcomponent}></Route>
            <Route
              path="/createPlaylist"
              component={Addplaylistcomponent}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

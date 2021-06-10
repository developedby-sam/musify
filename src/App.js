import React, { useState } from "react";
import Library from "./components/library/Library.js";
import "./styles/style.scss";

// importing components
import Player from "./components/player/Player.js";
import Song from "./components/song/Song.js";

// importing data
import data from "./data.js";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;

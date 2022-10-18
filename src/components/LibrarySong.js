import React from "react";

const LibrarySong = ({
  songs,
  song,
  setCurrentSong,
  id,
  setSongs,
  isPlaying,
  audioRef,
}) => {
  const songSelectHandler = async () => {
    // selecting Song
    await setCurrentSong(song);
    // set active state
    const newSong = songs.map((songState) => {
      if (songState.id === id) {
        return {
          ...songState,
          active: true,
        };
      } else {
        return {
          ...songState,
          active: false,
        };
      }
    });
    setSongs(newSong);
    //  check if song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artiest}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

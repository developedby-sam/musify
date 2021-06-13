import React from "react";
import { PlayAudio } from "../../util.js";
import "./LibrarySong.scss";

const LibrarySong = ({
	song,
	songs,
	setSongs,
	setCurrentSong,
	id,
	audioRef,
	isPlaying,
}) => {
	const handleSongSelect = () => {
		setCurrentSong(song);
		// Add active state
		const newSongs = songs.map((song) => {
			if (song.id === id) {
				return { ...song, active: true };
			} else {
				return { ...song, active: false };
			}
		});
		setSongs(newSongs);
		PlayAudio(isPlaying, audioRef);
	};
	return (
		<div
			onClick={handleSongSelect}
			className={`library-song ${song.active ? "selected" : ""}`}
		>
			<img src={song.cover} alt={song.name} />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;

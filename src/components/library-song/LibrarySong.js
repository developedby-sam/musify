import React from "react";
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
	const handleSongSelect = async () => {
		await setCurrentSong(song);
		// Add active state
		const newSongs = songs.map((song) => {
			if (song.id === id) {
				return { ...song, active: true };
			} else {
				return { ...song, active: false };
			}
		});
		setSongs(newSongs);
		if (isPlaying) audioRef.current.play();
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

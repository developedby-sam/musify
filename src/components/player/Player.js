import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import "./Player.scss";

const Player = ({
	songs,
	setSongs,
	songInfo,
	setSongInfo,
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	audioRef,
}) => {
	// useEffect
	useEffect(() => {
		// Add active state
		const newSongs = songs.map(
			(song) => {
				if (song.id === currentSong.id) {
					return { ...song, active: true };
				} else {
					return { ...song, active: false };
				}
			},
			[currentSong]
		);
		setSongs(newSongs);
	});
	// Event Handlers
	const handlePlaySong = () => {
		if (!isPlaying) {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		}
	};

	const handleInputDrag = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const handleSkipTrack = (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "skip-forward") {
			setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		}
		if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				setCurrentSong(songs[songs.length - 1]);
				return;
			}
			setCurrentSong(songs[(currentIndex - 1) % songs.length]);
		}
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};
	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					min={0}
					max={songInfo.duration || 0}
					value={songInfo.currentTime}
					onChange={handleInputDrag}
					type="range"
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<FeatherIcon
					onClick={() => handleSkipTrack("skip-back")}
					icon="skip-back"
					size={24}
					color="#6B7280"
				/>
				<FeatherIcon
					icon={isPlaying ? "pause" : "play"}
					size={24}
					color="gray"
					onClick={handlePlaySong}
				/>
				<FeatherIcon
					onClick={() => handleSkipTrack("skip-forward")}
					icon="skip-forward"
					size={24}
					color="gray"
				/>
			</div>
		</div>
	);
};

export default Player;

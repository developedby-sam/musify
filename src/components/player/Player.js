import React, { useRef, useState } from "react";
import FeatherIcon from "feather-icons-react";
import "./Player.scss";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	// Ref
	const audioRef = useRef(null);
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

	const handleTimeUpdate = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime: current, duration });
	};

	const handleInputDrag = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	// state
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					min={0}
					max={songInfo.duration}
					value={songInfo.currentTime}
					onChange={handleInputDrag}
					type="range"
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<FeatherIcon icon="skip-back" size={24} color="#6B7280" />
				<FeatherIcon
					icon={isPlaying ? "pause" : "play"}
					size={24}
					color="gray"
					onClick={handlePlaySong}
				/>
				<FeatherIcon icon="skip-forward" size={24} color="gray" />
			</div>
			<audio
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={handleTimeUpdate}
				ref={audioRef}
				src={currentSong.audio}
			></audio>
		</div>
	);
};

export default Player;

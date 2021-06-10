import React, { useRef } from "react";
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
	return (
		<div className="player">
			<div className="time-control">
				<p>Start Time</p>
				<input type="range" />
				<p>End Time</p>
			</div>
			<div className="play-control">
				<FeatherIcon icon="skip-back" size={24} color="gray" />
				<FeatherIcon
					icon="play"
					size={24}
					color="gray"
					onClick={handlePlaySong}
				/>
				<FeatherIcon icon="skip-forward" size={24} color="gray" />
			</div>
			<audio ref={audioRef} src={currentSong.audio}></audio>
		</div>
	);
};

export default Player;

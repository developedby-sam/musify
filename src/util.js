export const PlayAudio = (isPlaying, audioRef) => {
	if (isPlaying) {
		const playPromise = audioRef.current.play();
		playPromise.then((audio) => {
			audioRef.current.play();
		});
	}
};

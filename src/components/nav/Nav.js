import React from "react";
import FeatherIcon from "feather-icons-react";
import "./Nav.scss";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<nav>
			<h1>Musify</h1>
			<button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library
				<FeatherIcon
					className="music-icon"
					icon="music"
					size={22}
					color="#6B7280"
				/>
			</button>
		</nav>
	);
};

export default Nav;

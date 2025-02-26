import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar--fluid bg-dark text-light ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-dark">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

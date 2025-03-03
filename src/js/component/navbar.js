import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar--fluid bg-dark text-light ">
			<Link to="/">
				{/* <span className="navbar-brand mb-0 h1">{logo}</span> */}
				<img style = {{height:"50px"}}
				src = {logo}
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-dark">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

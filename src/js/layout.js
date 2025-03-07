import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


// import { Demo } from "./views/demo";
import Databank from "./views/Databank.jsx";
// import Single  from "./views/Single.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Details from "./component/Details.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div id="page-container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div id="content-wrap">
						<Routes>
							<Route path="/" element={<Databank />} />
							<Route path="/details/planets/:id" element={<Details category="planets" />} />
							<Route path="/details/characters/:id" element={<Details category="characters" />} />
							<Route path="/details/starships/:id" element={<Details category="starships" />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

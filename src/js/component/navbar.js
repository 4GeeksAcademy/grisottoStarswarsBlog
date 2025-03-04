import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/star-wars-logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar--fluid bg-dark text-light px-4">
      <Link to="/">
        {/* <span className="navbar-brand mb-0 h1">{logo}</span> */}
        <img style={{ height: "50px" }} src={logo} />
      </Link>
      <div className="ml-auto">
        <Link to="/">
          {/* <button className="btn btn-dark">Favorites [{store.favorites.length}]</button> */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites [{store.favorites.length}]
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mt-1">
              {store.favorites.length > 0 ? (
                store.favorites.map((fav, index) => (
                  <li
                    className="dropdown-item d-flex justify-content-between"
                    key={index}
                  >
                    <Link to={`/details/${fav.category}/${fav.index}`}>
                      <span>{fav.name}</span>
                    </Link>
					<span onClick={()=> actions.deleteFavorites(index)}>
						<i className="fa-solid fa-trash ms-2"></i>
					</span>
                  </li>
                ))
              ) : (
                <li className="dropdown-item text-center">(empty)</li>
              )}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};

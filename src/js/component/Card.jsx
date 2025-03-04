import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ item, index, category }) => {
  const { store, actions } = useContext(Context);
  const emptyPicImg = "https://picsum.photos/250/250";

  const getImgUrl = () => {
    if (category === "characters") {
      return store.characterImages[index] || emptyPicImg;
    } else if (category === "planets") {
      return store.planetImages[index] || emptyPicImg;
    }
    return store.starshipImages[index] || emptyPicImg;
  };

  const isFavorite = store.favorites.some(fav => fav.name === item.name && fav.category === category)
    const toggleFavorites = () => {
        const indexToDelete = store.favorites.findIndex(fav => fav.name === item.name && fav.category === category)
        isFavorite ? actions.deleteFavorites(indexToDelete) : actions.addFavorites({ name: item.name, index, category })
  };

  return (
    //<div className="col-lg-6 col-md-8 col-sm-12">
    <div key={index} className="card text-bg-dark w-75 mb-3">
      <div className="ratio ratio-4x3">
        <img
          src={getImgUrl()}
          className="card-img-top img-fluid"
          alt={item.name}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{item.name}</h5>
        <div className="flex-grow-1">
          <p className="card-text fw-semibold text-wrap mb-4">
            {category == "characters"
              ? "Gender: " + item.gender
              : category == "planets"
              ? "Gravity: " + item.gravity
              : category == "starships"
              ? "Manufacturer: " + item.manufacturer
              : ""}
          </p>
          <p className="card-text fw-semibold text-wrap mb-4">
            {category == "characters"
              ? "Eye color: " + item.eye_color
              : category == "planets"
              ? "Population: " + item.population
              : category == "starships"
              ? "Passengers: " + item.passengers
              : ""}
          </p>
          <p className="card-text fw-semibold text-wrap mb-4">
            {category == "characters"
              ? "Hair color: " + item.hair_color
              : category == "planets"
              ? "Climate: " + item.climate
              : category == "starships"
              ? "Max Atmosphering Speed: " + item.max_atmosphering_speed
              : ""}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-between px-3 w-100">
        <Link
          to={`/details/${category}/${index}`}
          className="btn btn-sm btn-outline-light"
        >
          Learn More
        </Link>
        <button
        onClick={toggleFavorites}
        type = "button"
          className="btn btn-sm btn-outline-light"
        >
        <i className={`fa-heart ${isFavorite? "fa-solid" : "fa-regular"}`}></i>
        </button>
      </div>
    </div>
    //</div>
  );
};

export default Card;

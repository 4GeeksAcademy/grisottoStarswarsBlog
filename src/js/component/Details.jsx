import React, {
  useState,
  useEffect,
  useContext,
  useDeferredValue,
} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Details = ({ category }) => {
  const { store } = useContext(Context);
  const params = useParams();
  const emptyPicImg = "https://picsum.photos/250/250";

  const character = store.allPeople.find((item, index) => index == params.id);
  const planet = store.allPlanets.find((item, index) => index == params.id);
  const starship = store.allStarships.find((item, index) => index == params.id);

  const getImgUrl = () => {
    const index = parseInt(params.id);
    if (category === "characters") {
      return store.characterImages[index] || emptyPicImg;
    } else if (category === "planets") {
      return store.planetImages[index] || emptyPicImg;
    }
    return store.starshipImages[index] || emptyPicImg;
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card bg-dark text-light border-0"
        style={{ minWidth: "75%", maxWidth: "75%" }}
      >
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
            <img className="img-fluid rounded" src={getImgUrl()} />
          </div>
          {/* planet.name */}
          <div className="col-md-8 p-4">
            <div className="card-body">
              {/* <div key={index}>
                <h2>{item.name}</h2>
              </div> */}
              <h2
                className="card-title text-center mb-5"
                style={{ fontSize: "3rem" }}
              >
                <u>
                  {category == "characters"
                    ? character.name
                    : category == "planets"
                    ? planet.name
                    : starship.name}
                </u>
              </h2>

              <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                <u className="w-50 text-end pe-2">
                  {category == "characters"
                    ? "Birth Year:"
                    : category == "planets"
                    ? "Terrain"
                    : "Manufacturer"}
                </u>
                <p className="ps-2">
                  {category == "characters"
                    ? character.birth_year
                    : category == "planets"
                    ? planet.terrain
                    : starship.manufacturer}
                </p>
              </div>
              <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                <u className="w-50 text-end pe-2">
                  {category == "characters"
                    ? "Birth Year:"
                    : category == "planets"
                    ? "Terrain"
                    : "Manufacturer"}
                </u>
                <p className="ps-2">
                  {category == "characters"
                    ? character.birth_year
                    : category == "planets"
                    ? planet.terrain
                    : starship.manufacturer}
                </p>
              </div>
              <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                <u className="w-50 text-end pe-2">
                  {category == "characters"
                    ? "Birth Year:"
                    : category == "planets"
                    ? "Terrain"
                    : "Manufacturer"}
                </u>
                <p className="ps-2">
                  {category == "characters"
                    ? character.birth_year
                    : category == "planets"
                    ? planet.terrain
                    : starship.manufacturer}
                </p>
              </div>
              <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                <u className="w-50 text-end pe-2">
                  {category == "characters"
                    ? "Birth Year:"
                    : category == "planets"
                    ? "Terrain"
                    : "Manufacturer"}
                </u>
                <p className="ps-2">
                  {category == "characters"
                    ? character.birth_year
                    : category == "planets"
                    ? planet.terrain
                    : starship.manufacturer}
                </p>
              </div>
              <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                <u className="w-50 text-end pe-2">
                  {category == "characters"
                    ? "Birth Year:"
                    : category == "planets"
                    ? "Terrain"
                    : "Manufacturer"}
                </u>
                <p className="ps-2">
                  {category == "characters"
                    ? character.birth_year
                    : category == "planets"
                    ? planet.terrain
                    : starship.manufacturer}
                </p>
              </div>
              <div className="d-flex flex-row" style={{ fontSize: "1rem" }}>
                <u className="w-50 text-end pe-2">
                  {category == "characters"
                    ? "Birth Year:"
                    : category == "planets"
                    ? "Terrain"
                    : "Manufacturer"}
                </u>
                <p className="ps-2">
                  {category == "characters"
                    ? character.birth_year
                    : category == "planets"
                    ? planet.terrain
                    : starship.manufacturer}
                </p>
              </div>

              {/* Additional Character Details Section */}
              {/* <div className="card-body"> */}
              {/* <div className="row">
                <div className="col-md-3">
                    <h6 className="text-danger">HOMEWORLD</h6>
                    <p><a href={character.homeworld} className="text-light">View Planet</a></p>
                </div>
                <div className="col-md-3">
                    <h6 className="text-danger">MASS</h6>
                    <p>{character.mass} kg</p>
                </div>
                <div className="col-md-3">
                    <h6 className="text-danger">API LINK</h6>
                    <p><a href={character.url} className="text-light">API Resource</a></p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

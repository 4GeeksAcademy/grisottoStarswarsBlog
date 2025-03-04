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
    <div className="d-flex justify-content-center bg-dark" style={{minHeight: "100%"}}>
      <div
        className="card bg-dark text-light border-0"
        style={{ minWidth: "75%", maxWidth: "75%" }}
      >
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
            <img className="img-fluid rounded" src={getImgUrl()} />
          </div>
          
          <div className="col-md-8 p-4">
            <div className="card-body">
              
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
            <div className="d-flex justify-content-center" >
              



            </div>
          </div>
        </div>
      </div>
      </div>                
    </div>
  );
};

export default Details;

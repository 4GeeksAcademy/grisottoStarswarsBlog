import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Details = ({ category, index, item }) => {
    const { store } = useContext(Context)
    const params = useParams()

    const character = store.allPeople.find((item, index) => index == params.id)
    const planet = store.allPlanets.find((item, index) => index == params.id)
    const starship = store.allStarships.find((item, index) => index == params.id)


    

    const getImgUrl = () => {
        if (category === "characters") {
          return store.characterImages[index] || emptyPicImg;
        } else if (category === "planets") {
          return store.planetImages[index] || emptyPicImg;
        }
        return store.starshipImages[index] || emptyPicImg;
      };
   

    return (

        <div className="d-flex justify-content-center">
            <div className="card bg-dark text-light border-0">
                <div className="row g-0">

                    <div className="col-md-8 p-4">
                            {category === "planets" && store.allPlanets?.map((item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <p>Gravity: {item.gravity}</p>
                        </div>
))}
                    {store.allPeople?.length > 0
                            ? store.allPeople.map((item, index) => {
                                return (
                                    <div key={index}>
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
                                  
                                );
                              })
                            : null}
                        <h2 className="text-uppercase">{item.name}   </h2>
                       
                    </div>
                </div>

                {/* Additional Character Details Section */}
                <div className="card-body">
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
                                    </div>
                                </div> */}
                </div>

            </div>
        </div>

    );
};

export default Details;

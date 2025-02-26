import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Details = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch API Data When Component Mounts
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch character details.");
        }
        return response.json();
      })
      .then((data) => {
        setCharacter(data.result.properties); // ✅ Extracting the "properties" object
        setLoading(false);
        console.log("inside details data.result.prop", data.result.properties)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Show Loading or Error Message
  if (loading) {
    return <div className="text-center text-light">Loading character details...</div>;
  }
  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="container-fluid bg-dark text-light py-4 min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <div className="card bg-dark border-0">
              <div className="row g-0">
                
                {/* Left Side - Character Image */}
                <div className="col-md-4">
                  <img
                    className="img-fluid rounded-start w-100"
                    src="https://picsum.photos/500/500"
                    alt={character.name}
                  />
                </div>

                {/* Right Side - Character Name & Details */}
                <div className="col-md-8 p-4">
                  <h2 className="text-uppercase">{character.name}</h2>
                  <p><strong>Gender:</strong> {character.gender}</p>
                  <p><strong>Eye Color:</strong> {character.eye_color}</p>
                  <p><strong>Hair Color:</strong> {character.hair_color}</p>
                  <p><strong>Height:</strong> {character.height} cm</p>
                  <p><strong>Skin Color:</strong> {character.skin_color}</p>
                  <p><strong>Birth Year:</strong> {character.birth_year}</p>
                </div>
              </div>

              {/* Additional Character Details Section */}
              <div className="card-body">
                <div className="row">
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
                </div>
              </div> 

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

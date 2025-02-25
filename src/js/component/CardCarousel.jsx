import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


 const CardCarousel = ({ name, people }) => {
        return (
            <div className="container mt-4">
                <div className="row">
                    {/* ✅ First Loop: People */}
                    {people.length > 0 ? (
                        people.map(person => (
                            <div key={person.uid} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{person.name}</h5>
                                        <div className="col-12">
                                            <p><strong>Eye Color:</strong> {person.eye_color}</p>
                                            <p><strong>Hair Color:</strong> {person.hair_color}</p>
                                            <p><strong>Gender:</strong> {person.gender}</p>
                                        </div>
                                        <a href={person.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>Loading characters...</p>
                        </div>
                    )}
    
                    {/* ✅ Second Loop: Name */}
                    {name?.length > 0 ? (
                        name.map(item => (
                            <div key={item.uid} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{item.name}</h5>
                                        <div className="col-12">
                                            {/* You can add additional details here if needed */}
                                        </div>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>Loading characters...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };
    
    export default CardCarousel;
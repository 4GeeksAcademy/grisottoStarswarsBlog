import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import Card from "../component/Card.jsx";

const Single = () => {
  const { store, actions } = useContext(Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        actions.getPeople(),
        actions.getPlanets(),
        actions.getStarships(),
      ]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="container-fluid bg-dark text-light py-4">
                    <div className="row">
                      <div className="md-12">
                        <h2 className="text-center my-4">Star Wars Characters</h2>
                        <div className="container-fluid d-flex overflow-auto p-2">
                          {store.allPeople?.length > 0
                            ? store.allPeople.map((people, index) => {
                                return (
                                  <Card
                                    item={people}
                                    index={index}
                                    key={index}
                                    category="characters"
                                  />
                                );
                              })
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="container-fluid">
                        <h2 className="text-center my-4">Star Wars Planets</h2>
                        <div className="d-flex overflow-auto">
                          {store.allPlanets?.length > 0
                            ? store.allPlanets.map((planet, index) => {
                                return (
                                  <Card
                                    item={planet}
                                    index={index}
                                    key={index}
                                    category="planets"
                                  />
                                );
                              })
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="container-xl">
                        <h2 className="text-center my-4">Star Wars Starships</h2>
                        <div className="d-flex overflow-auto">
                          {store.allStarships?.length > 0
                            ? store.allStarships.map((starship, index) => {
                                return (
                                  <Card
                                    item={starship}
                                    index={index}
                                    key={index}
                                    category="starships"
                                  />
                                );
                              })
                            : null}
                        </div>
                      </div>
                    </div>
    </div>
  );
};

export default Databank;

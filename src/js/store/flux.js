

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			Databank: []
            
		},
		actions: {
			getAllResources: () => {
                fetch("https://www.swapi.tech/api/")
                    .then(response => response.json())                    
                    .then(data => setStore({ allResources: data.result }))      
                    .catch(error => console.error("Error fetching resources:", error));
            },
            getAllStarships: () => {
                fetch("https://www.swapi.tech/api/starships/")
                    .then(response => response.json())
                    .then(data => setStore({ allStarships: data.results }))
                    .catch(error => console.error("Error fetching starships:", error));
            },

            getAllPeople: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(response => response.json())
                    .then(data => setStore({ allPeople: data.results }))
                    .catch(error => console.error("Error fetching people:", error));
            },

            getAllPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(response => response.json())
                    .then(data => setStore({ allPlanets: data.results }))
                    .catch(error => console.error("Error fetching planets:", error));
            },
            // getPlanet: (planetId) => {
            //     fetch(`https://www.swapi.tech/api/planets/${planetId}`)
            //         .then(response => {
            //             if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
            //             return response.json();
            //         })
            //         .then(data => setStore({ planet: data.result.properties }))
            //         .catch(error => console.error(`Error fetching planet ${planetId}:`, error));
            // },
            getPeople: (uid) => {
                fetch(`https://www.swapi.tech/api/people/${uid}`)
                    .then(response => {
                        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
                        return response.json();
                    })
                    .then(data => setStore({ people: data.result}))
                    .catch(error => console.error(`Error fetching people ${uid}:`, error));
            }


			
			}
            

			
			}
		};


export default getState;
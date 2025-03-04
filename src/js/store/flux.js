
const getState = ({ getStore, getActions, setStore }) => {
	const API_URL = "https://www.swapi.tech/api/";

    return {
        store: {
            Databank: [],
			favorites: [],
                      
            
            allPeople: [],
            allPlanets: [],
            allStarships: [],
            characterImages: [
				"https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
				"https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
				"https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
				"https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
				"https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
				"https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
				"https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
				"https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
				"https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
				"https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
			  ],
			  planetImages: [
				"https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png",
				"https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg",
				"https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png",
				"https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png",
				"https://static.wikia.nocookie.net/starwars/images/7/7d/Dagobah-CGSWG.png",
				"https://static.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png",
				"https://static.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png",
				"https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png",
				"https://static.wikia.nocookie.net/starwars/images/8/84/CoruscantGlobeE1.png",
				"https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg",
			  ],
			  starshipImages: [
				"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2e0f812-760e-426d-8792-fe53817ccbd3/dc7r0st-a74472ce-8092-401a-ba8c-9635e78cceba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyZTBmODEyLTc2MGUtNDI2ZC04NzkyLWZlNTM4MTdjY2JkM1wvZGM3cjBzdC1hNzQ0NzJjZS04MDkyLTQwMWEtYmE4Yy05NjM1ZTc4Y2NlYmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gWGLJ7914bUMqMtxru5pQr8oCWUhYhS3vdLrR1eCXP8",
				"https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C50%2C1600%2C800",
				"https://static.wikia.nocookie.net/starwars/images/5/5b/Imperial_Sentinel-class_shuttle.png",
				"https://cdn.wallpapersafari.com/70/91/clwqXy.png",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtft0FVNe2cS0tumsPLeew190kje113lXPb30CFiZffqT2RNf4&usqp=CAc",
				"https://lumiere-a.akamaihd.net/v1/images/resistance-ywing-main_10b5e63d.jpeg?region=340%2C0%2C720%2C720",
				"https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769",
				"https://cdnb.artstation.com/p/assets/images/images/028/086/799/large/donny-versiga-sw-tie-advanced-01.jpg?1593449609",
				"https://swrpggm.com/wp-content/uploads/2020/12/SSDFE.png",
				"https://external-preview.redd.it/A2lpCEKxYSNqsgaHHjz9TPYVWnAhrA1s64Ey6hCDmv8.jpg?auto=webp&s=1d0a97617b39c6adcbdf34d55c76fe600e1d6d12"
			  ],


        },
        actions: {
            
            getPlanets: async () => {
				try {
					let resp = await fetch(API_URL + "planets")
					if (!resp.ok) {
						throw new Error(`Data request unsuccessful. Status: ${resp.status}, Status Text: ${resp.statusText}`)
					}
					let data = await resp.json();

					const planetDetails = await Promise.all(
						data.results.map(async (planet) => {
							let detailsResp = await fetch (planet.url);
							if (!detailsResp.ok) {
								throw new Error (`Unable to fetch planet details: Status: ${detailsResp.status}, Status Text: ${detailsResp.statusText}`)
							}
							let detailsData = await detailsResp.json();
							return detailsData.result.properties;
						})
					)
					setStore ({ allPlanets: planetDetails })
				} catch (error) {
					console.log("Error fetching planets:", error);
				}
			},
			getPeople: async () => {
				try {
					let resp = await fetch(API_URL + "people")
					if (!resp.ok) {
						throw new Error(`Data request unsuccessful. Status: ${resp.status}, Status Text: ${resp.statusText}`)
					}
					let data = await resp.json();

					const peopleDetails = await Promise.all(
						data.results.map(async (people) => {
							let detailsResp = await fetch (people.url);
							if (!detailsResp.ok) {
								throw new Error (`Unable to fetch people details: Status: ${detailsResp.status}, Status Text: ${detailsResp.statusText}`)
							}
							let peopleDetailsData = await detailsResp.json();
							return peopleDetailsData.result.properties;
						})
					)
					setStore ({ allPeople: peopleDetails })
				} catch (error) {
					console.log("Error fetching people:", error);
				}
			},
            getStarships: async () => {
				try {
					let resp = await fetch(API_URL + "starships")
					if (!resp.ok) {
						throw new Error(`Data request unsuccessful. Status: ${resp.status}, Status Text: ${resp.statusText}`)
					}
					let data = await resp.json();

					const starshipDetails = await Promise.all(
						data.results.map(async (starship) => {
							let detailsResp = await fetch (starship.url);
							if (!detailsResp.ok) {
								throw new Error (`Unable to fetch starship details: Status: ${detailsResp.status}, Status Text: ${detailsResp.statusText}`)
							}
							let starDetailsData = await detailsResp.json();
							return starDetailsData.result.properties;
						})
					)
					setStore ({ allStarships: starshipDetails })
				} catch (error) {
					console.log("Error fetching planets:", error);
				}
			},
            
			addFavorites: (fav) => {
				setStore({
					favorites: [...getStore().favorites, fav],
					
				})
			},

			deleteFavorites: (indexToDelete) => {
				const newFavorites = getStore().favorites.filter((fav, index) => index !== indexToDelete);
				setStore({favorites: newFavorites})

			}

            
          


        }



    }
};


export default getState;
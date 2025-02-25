import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import CardCarousel from "../component/CardCarousel.jsx";

const Databank = () => {
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.getAllPeople();
        actions.getPeople();       

    }, []);

    return (
        <div className="container">
            <h2 className="text-center my-4">Star Wars Characters</h2>
            <CardCarousel 
                name={store.allPeople} 
                people={store.people}
                
                
            
            /> {/* Pass fetched data to CardCarousel */}
        </div>
    );
};

export default Databank;

            //  {/* <div className="col">
            //      <div className="card h-100">
            //       <img
            //                 className="rounded-circle"
            //                 src="https://picsum.photos/170/170/"
            //                 alt="Contact"
            //         />
            //     <div className="card-body">
            //         <h5 className="card-title">Card title</h5>
            //         <p className="card-text">This is a short card.</p>
            //     </div>
            //     </div>
            // </div>
            // <div className="col">
            //     <div className="card h-100">
            //         <img
            //                 className="rounded-circle"
            //                 src="https://picsum.photos/170/170/"
            //                 alt="Contact"
            //         />
            //     <div className="card-body">
            //         <h5 className="card-title">Card title</h5>
            //         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            //     </div>
            //     </div>
            // </div>
            // <div className="col">
            //     <div className="card h-100">
            //         <img
            //                 className="rounded-circle"
            //                 src="https://picsum.photos/170/170/"
            //                 alt="Contact"

            //         />
            //     <div className="card-body">
            //         <h5 className="card-title">Card title</h5>
            //         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //     </div>
            //     </div>
            // </div> */}
            
//     );
// };

// export default Databank;
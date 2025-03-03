// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";


//  const CardCarousel = ({ allPeople, characterDetails, category }) => {
//         return (
//             <div className="container-fluid bg-dark text-light py-4 min-vh-100">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="d-flex overflow-auto">
                                      
                
                  
                    
                    
//                     {allPeople?.length > 0 ? (
//                         allPeople.slice(0, 10).map((person, index) => {
//                             const details = characterDetails.find(
//                                 detail => detail.name === person.name
                                
//                             );

//                             return (                         
                                                
//                                 <div key={person.uid} className="card bg-secondary text-light mx-2">
//                                     <div className="card bg-secondary text-light">
//                                                         <img
//                                                                     className="card-img-top"
//                                                                     src="https://picsum.photos/170/170/"
//                                                                     alt="Contact"
//                                                             />
//                                                             <div className="card-body text-center">
//                                                                 <h5 className="card-title">{person.name}</h5>
//                                                                 {details && (
//                                                                     <div className="col-12">                                                                        
//                                                                         <p><strong>Eye Color:</strong> {details.eye_color}</p>
//                                                                         <p><strong>Hair Color:</strong> {details.hair_color}</p>
//                                                                         <p><strong>Gender:</strong> {details.gender}</p>
//                                                                     </div>                                                     
                                                            
//                                                             )}
//                                                                 <Link to={`/single/${category}/${index}`} className="btn btn-sm btn-outline-light"> Learn More </Link>
//                                                             </div>
//                                                 </div>
//                                         </div>                                  
//                         );
//                       })
//                     ) : (
//                         <div className="text-center w-100">
//                             <p>Loading characters...</p>
//                         </div>
//                     )}
//                 </div>
//             </div>   
                   
//         </div>
//     </div>            
          
//     );
// };
    
//     export default CardCarousel;
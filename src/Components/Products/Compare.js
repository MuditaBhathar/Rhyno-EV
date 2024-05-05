// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import Navbar from "./Navbar";

// const images = ["bike.png", "black.png", "blue.png"];
// const words = ["Elegance", "Minimalism", "Comfort"];

// export default function App() {
//   const [index, setIndex] = useState(0);
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="full-height">
//       <Navbar />
//       <div className="container">
//         <div className="left-panel">
//           <div className="front-line">
//             <p>
//               Let's Elevate Your Ride Experience With Rhyno – Where Superiority
//               Meets <span className="dynamic-word">{words[wordIndex]}</span>.
//             </p>
//           </div>
//         </div>
//         <div className="right-panel">
//           <div className="vehicle-photos">
//             {images.map((image, idx) => (
//               <div key={idx} className={`slide ${idx === index ? "active" : ""}`}>
//                 <img src={`/Images/${image}`} alt={`Vehicle ${idx + 1}`} />
//                 <button className="checkout-button">Checkout</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

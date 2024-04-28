// import { useEffect } from "react";

import { useEffect, useRef } from "react";

// const MovingImage = () => {
//   // Function to generate random position
//   const getRandomPosition = () => {
//     const x = Math.floor(Math.random() * window.innerWidth);
//     const y = Math.floor(Math.random() * window.innerHeight);
//     return { x, y };
//   };

//   useEffect(() => {
//     // Get the image element
//     const image = document.getElementById("moving-image");

//     // Move the image to a random position initially
//     const initialPosition = getRandomPosition();
//     image.style.left = `${initialPosition.x}px`;
//     image.style.top = `${initialPosition.y}px`;

//     // Function to move the image randomly
//     const moveImage = () => {
//       const newPosition = getRandomPosition();
//       image.style.left = `${newPosition.x}px`;
//       image.style.top = `${newPosition.y}px`;
//     };

//     // Move the image periodically
//     const intervalId = setInterval(moveImage, 3000); // Change 3000 to adjust speed

//     // Clean up interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <img
//       id="moving-image"
//       src="/push.png"
//       alt=""
//       className="moving-image"
//       style={{ position: "absolute" }}
//     />
//   );
// };

// export default MovingImage;
// import React, { useRef } from "react";
// import PropTypes from "prop-types"; // Import PropTypes for props validation

// const MovingImage = ({ x, y, speed }) => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     // Apply animation when the component mounts
//     imageRef.current.classList.add("moving-image-animation");

//     // Remove animation after it finishes
//     const animationEndHandler = () => {
//       imageRef.current.classList.remove("moving-image-animation");
//       imageRef.current.removeEventListener("animationend", animationEndHandler);
//     };
//     imageRef.current.addEventListener("animationend", animationEndHandler);

//     // Clean up animation on unmount
//     return () => {
//       imageRef.current.removeEventListener("animationend", animationEndHandler);
//     };
//   }, []);

//   return (
//     <img
//       ref={imageRef}
//       src="/push.png"
//       alt=""
//       className="moving-image"
//       style={{
//         position: "absolute",
//         left: `${x}px`,
//         top: `${y}px`,
//         transition: `transform ${speed}s linear, top ${speed}s linear`, // Apply transition for smooth movement
//       }}
//     />
//   );
// };

// // Define prop types for the MovingImage component
// MovingImage.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired,
//   speed: PropTypes.number.isRequired,
// };

// export default MovingImage;

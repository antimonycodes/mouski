import { useEffect } from "react";

const Ants = () => {
  useEffect(() => {
    const container = document.getElementById("ants-con");
    const numAnts = 20;
    for (let i = 0; i < numAnts; i++) {
      const ant = document.createElement("div");
      ant.classList.add(".ant");
      container.appendChild(ant);
    }
    const animateAnts = () => {
      const ants = document.querySelectorAll(".ant");

      ants.forEach((ant) => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        ant.style.left = `${x}px`;
        ant.style.top = `${y}px`;
      });
    };
    animateAnts();

    const intervalId = setInterval(animateAnts, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return <div id="ants-con ">heyyy</div>;
};

export default Ants;

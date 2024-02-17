import React from "react";
import disney from "./../../../assets/Videos/disney.mp4";
import marvel from "./../../../assets/Videos/marvel.mp4";
import pixar from "./../../../assets/videos/pixar.mp4";
import geographic from "./../../../assets/Videos/national-geographic.mp4";
import star from "./../../../assets/Videos/star-wars.mp4";

import disneyV from "./../../../assets/disney.png";
import marvelV from "./../../../assets/marvel.png";
import geographicV from "./../../../assets/nationalG.png";
import pixarV from "./../../../assets/pixar.png";
import starV from "./../../../assets/starwar.png";

const Card = () => {
  const list = [
    {
      id: 1,
      image: disneyV,
      video: disney,
    },
    {
      id: 2,
      image: marvelV,
      video: marvel,
    },
    {
      id: 3,
      image: pixarV,
      video: pixar,
    },
    {
      id: 4,
      image: geographicV,
      video: geographic,
    },
    {
      id: 5,
      image: starV,
      video: star,
    },
  ];
  return (
    <>
      <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
        {list.map((item) => (
          <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black ">
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              className="absolute top-0 rounded-md opacity-0 hover:opacity-55  "
            />
            <img src={item.image} alt="card" className="w-full  h-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

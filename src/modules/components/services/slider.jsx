import React, { useEffect, useRef, useState } from "react";
import trendingMovies from "./globalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMG_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const elementRef = useRef();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    trendingVideos();
  }, []);

  const trendingVideos = () => {
    trendingMovies.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (ele) => {
    ele.scrollLeft += window.innerWidth - 110;
  };
  const sliderLeft = (ele) => {
    ele.scrollLeft -= window.innerWidth - 110;
  };
  return (
    <>
      <div>
        <HiChevronLeft
          className=" text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className=" text-white  text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />

        <div
          className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
          ref={elementRef}
        >
          {movieList.map((item, index) => (
            <img
              src={IMG_URL + item.backdrop_path}
              alt="trend"
              className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px]  border-gray-400 transition-all ease-in duration-100"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;

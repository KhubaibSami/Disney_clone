import React, { useState } from "react";
import logo from "./../../../../assets/logo.png";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import {
  HiStar,
  HiHome,
  HiMiniMagnifyingGlass,
  HiTv,
  HiPlayCircle,
} from "react-icons/hi2";
import HeaderItems from "../headerItems.jsx/headerItems";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const dropdown = () => setToggle(!toggle);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMiniMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex items-center gap-8">
          <img
            src={logo}
            alt="logo"
            className="w-[80px] md:w-[115px] object-cover"
          />
          <div className="hidden md:flex gap-8">
            {menu.map((item) => (
              <HeaderItems name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex md:hidden gap-5">
            {menu.map(
              (item, index) =>
                index < 3 && <HeaderItems name={" "} Icon={item.icon} />
            )}
            <div className="md:hidden " onClick={dropdown}>
              <HeaderItems name={" "} Icon={HiDotsVertical} />
              {toggle ? (
                <div className="absolute mt-3 bg-[#121212] p-3 border-[1px] border-gray-700 px-5">
                  {menu.map(
                    (item, index) =>
                      index > 2 && (
                        <HeaderItems name={item.name} Icon={item.icon} />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile"
          className="w-[60px] rounded-full"
        />
      </div>
    </>
  );
};

export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../../misc/constants";
import burger from "../../../assets/svg/burger.svg";
import closeIcon from "../../../assets/svg/close.svg";
import ControlPanel from "../ControlPanel";

export default function MobileNav() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const closeMenu = () => setMenuVisible(false);

  return (
    <div className="flex w-full justify-between mt-5 relative">
      <Link to={"/"}>
        <img src="logo.svg" alt="Logo" />
      </Link>

      <img
        onClick={toggleMenu}
        src={burger}
        alt="Menu"
        className="w-5 h-5 cursor-pointer"
      />
      <div
        className={`absolute top-[-20px] right-[-100px] bg-white w-2/3 p-5 transition-all duration-300 ease-in-out transform ${
          isMenuVisible
            ? "translate-x-0 shadow-2xl border rounded-md"
            : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center">
          <img
            onClick={closeMenu}
            src={closeIcon}
            alt="Close menu"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 text-[#807A75] hover:text-[#132050] items-center"
              onClick={closeMenu}
            >
              {item.img({})}
              {item.title}
            </div>
          ))}
          <ControlPanel />
        </div>
      </div>
    </div>
  );
}

import { FiAlignJustify } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

const Nav = () => {
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchData.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchData)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <nav className="flex mt-3 items-center justify-between px-12 bg-black py-3">
        <div className="flex gap-5 items-center">
          
          <NavLink to="/">
            <p className="text-white text-[28px] font-medium">Cinema</p>
          </NavLink>
        </div>

        <div className="px-4 flex outline-1 w-[400px] py-1 rounded-[20px] bg-white">
          <IoIosSearch className="text-2xl" />
          <input
            type="text"
            className="ml-15 text-center flex-1 focus:outline_none focus:ring-0 appearance-none"
            value={searchData}
            placeholder="Enter keywords..."
            onChange={(e) => setSearchData(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="ml-2 text-black font-semibold "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <NavLink
            to="/watchlist"
            className="text-white rounded font-medium mr-2 p-1 bg-gray-500"
          >
            Watchlist
          </NavLink>
          <NavLink
            to="/watched"
            className="text-white rounded font-medium mr-2 p-1 bg-gray-500"
          >
            Watched
          </NavLink>
          {/* <IoPerson className="text-xl text-white" />
          <p className="text-[18px] text-white">Login</p> */}
        </div>
      </nav>
    </div>
  );
};

export default Nav;

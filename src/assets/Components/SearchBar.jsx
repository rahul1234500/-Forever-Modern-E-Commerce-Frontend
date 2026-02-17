import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../Images/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-8">
      <div className="inline-flex items-center justify-between border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white shadow-sm hover:shadow-md transition-shadow">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm px-2"
          type="text"
          placeholder="Search for products..."
        />
        <img className="w-4 mx-2" src={assets.search_icon} alt="Search" />
        <img
          onClick={() => setShowSearch(false)}
          className="w-3 cursor-pointer ml-2 hover:opacity-70 transition-opacity"
          src={assets.cross_icon}
          alt="Close"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;

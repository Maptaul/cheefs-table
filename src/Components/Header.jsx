import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
      {/* Logo */}
      <h1 className="text-gray-800 font-bold text-3xl">Chef Table</h1>
      {/* menu start */}
      <ul className="flex gap-6 text-gray-600 font-semibold text-base">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Recipes</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Search</a>
        </li>
      </ul>
      {/* menu end */}
    </div>
  );
};

export default Header;

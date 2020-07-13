import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-teal-700">
      <div className="container mx-auto px-10 py-4">
        <ul className="flex justify-between items-center w-full block">
          <li>
            <img
              src="https://anilist.co/img/icons/icon.svg"
              alt="Anilist"
              width="50"
              height="50"
            />
          </li>
          <li>
            <Link
              to="/search"
              className="text-white font-bold text-sm hover:text-blue-200"
            >
              Browse
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

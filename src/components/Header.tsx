import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <img
            src="https://anilist.co/img/icons/icon.svg"
            alt="Anilist"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Link to="/search"> Browse</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

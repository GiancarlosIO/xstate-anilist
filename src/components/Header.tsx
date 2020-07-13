import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/search"> Browse</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  background-color: #3370ff !important;
`;

function Header() {
  return (
    <NavContainer
      className="w-full md:flex md:items-center md:w-auto md:justify-center "
      id="menu"
    >
      <ul
        className="
              text-base text-white
              w-10/12
              pt-4
              md:flex
              md:justify-center
              md:pt-0"
      >
        <li>
          <Link
            className="md:p-2 py-1 block border-solid  hover:text-purple-400"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="md:p-2 py-1 block border-solid hover:text-purple-400"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="md:p-2 py-1 block border-solid hover:text-purple-400"
            to="/articles"
          >
            Articles
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Header;

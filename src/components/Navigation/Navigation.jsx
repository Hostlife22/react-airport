import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgSelector } from '../index';
import './navigation.scss';

const Navigation = () => {
  const navNames = ['departures', 'arrivals'];
  return (
    <ul className="navigation">
      {navNames.map((link) => (
        <NavLink
          to={`/${link}`}
          key={link}
          className={({ isActive }) =>
            isActive ? 'navigation__link-active' : ''
          }>
          <li className="navigation__item">
            <span>
              <SvgSelector id={link} />
            </span>
            {link}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Navigation;
